'use client';
import { Button } from '@/components/ui/button';
import CommentsModal from '@/components/ui/comments-modal';
import EngagementButtons from '@/components/ui/engagement-buttons';
import GenFooter from '@/components/ui/footer';
import Header from '@/components/ui/header';
import IdModal from '@/components/ui/id-modal';
import Modal from '@/components/ui/modal';
import { MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// import { notFound } from 'next/navigation'; // ❌ REMOVED - causes hydration issues
import { useEffect, useState, use } from 'react'; // ✅ ADDED 'use' hook
import ReactMarkdown from 'react-markdown';
import welcomeModalContent from '@/lib/modal-content';
import DOMPurify from 'dompurify';

// Update the interface to include engagement fields
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  created_at: string;
  category: string;
  slug: string;
  comments: Array<{ id: number; text: string; created_at: string }>;
  likes: Array<{ id: number; created_at: string }>;
  shares: Array<{ id: number; platform: string; created_at: string }>;
}

// ❌ OLD - params is undefined in Next.js 15+
// export default function ArticlePage({ params }: { params: { slug: string } }) {

// ✅ NEW - params is a Promise that needs unwrapping
export default function ArticlePage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // ✅ Unwrap the params Promise
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;

  const [article, setArticle] = useState<Article | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [showIdModal, setShowIdModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ ADDED - for hydration safety

  useEffect(() => {
    setMounted(true);
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    const storedId = localStorage.getItem('myId');
    if (storedId) {
      setUserId(storedId);
    }
  }, []);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(
          'https://daily-news-5k66.onrender.com/news/written/get/'
        );
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        
        // ✅ Changed from params.slug to slug
        const articleId = Number.parseInt(slug, 10);
        const articles: Article[] = await res.json();

        console.log('🔍 DEBUG:');
        console.log('slug:', slug);
        console.log('articleId:', articleId);
        console.log('Is NaN?:', isNaN(articleId));

        // ✅ ADDED - validate articleId
        if (isNaN(articleId)) {
          console.log('❌ ArticleId is NaN');
          setArticle(null);
          setLoading(false);
          return;
        }

        // Prefer finding by id; fall back to index if needed
        const found =
          articles.find((a) => a.id === articleId) ||
          articles[articleId - 1] ||
          null;

        console.log('articleId', articleId, 'found', !!found);
        if (found) {
          console.log('✅ Article found:', found.title);
        } else {
          console.log('❌ No article with ID:', articleId);
        }
        
        setArticle(found);
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [slug]); // ✅ Changed dependency from params.slug to slug

  const handleCommentsClick = () => {
    if (!userId) {
      setShowIdModal(true);
    } else {
      setShowComments(true);
    }
  };

  const handleIdSubmit = (newId: string) => {
    localStorage.setItem('myId', newId);
    setUserId(newId);
    setShowIdModal(false);
    setShowComments(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <p>Loading article...</p>
        </main>
        <GenFooter />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/web4/allnews" className="text-primary hover:underline">
              ← Back to News
            </Link>
          </div>
        </main>
        <GenFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {mounted && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">
              {welcomeModalContent.brief}
            </h2>
            <Image
              src={welcomeModalContent.image}
              alt="Daily News"
              width={200}
              height={80}
              className="mx-auto mb-4"
            />
          </div>
          <p className="mb-4">{welcomeModalContent.text}</p>
          <Button onClick={() => setIsModalOpen(false)}>I understand</Button>
        </Modal>
      )}

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          {/* Main Content */}
          <article className="space-y-6">
            <div className="flex items-center gap-4 pt-6">
              <Link
                href="/web4/allnews"
                className="text-primary hover:underline"
              >
                &larr; Back to News
              </Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{article.category}</span>
                <span>•</span>
                <time dateTime={article.created_at}>
                  {new Date(article.created_at).toLocaleDateString()}
                </time>
              </div>
              <h1 className="text-4xl font-bold">{article.title}</h1>
              <div className="flex items-center gap-2 text-sm">
                <span>By Daily News AI</span>
              </div>
            </div>

            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(article?.content || ''),
              }}
            />

            {/* ✅ ADDED mounted check - prevents hydration issues */}
            {mounted && (
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-t pt-4">
                <EngagementButtons
                  url={`https://daily-news-5k66.onrender.com/news/written`}
                  newsId={article.id}
                  initialLikes={article.likes.length}
                  initialShares={article.shares.length}
                />
                <button
                  onClick={handleCommentsClick}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-1">
                    <MessageCircle /> {article.comments.length}
                  </span>
                </button>
              </div>
            )}

            {showComments && article && (
              <CommentsModal
                url={`https://daily-news-5k66.onrender.com/news/written/${article.id}/comment/`}
                newsId={article.id}
                initialComments={article.comments}
                onClose={() => setShowComments(false)}
              />
            )}

            {showIdModal && (
              <IdModal
                isOpen={showIdModal}
                onClose={() => setShowIdModal(false)}
                onSubmit={handleIdSubmit}
              />
            )}

            <div className="flex items-center gap-4 pt-6">
              <Link
                href="/web4/allnews"
                className="text-primary hover:underline"
              >
                &larr; Back to News
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Advertisement Section */}
            <section className="border rounded-lg p-4">
              <h3 className="font-bold mb-4">Advertisement</h3>
              <div className="bg-muted aspect-square flex items-center justify-center">
                <Image
                  src="/book.jpg"
                  alt="Ad Space"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </section>

            {/* Related Stories */}
            <section className="border rounded-lg p-4">
              <h3 className="font-bold mb-4">Related Stories</h3>
              <div className="space-y-4">
                <Link href="#" className="block hover:text-primary">
                  Global Summit Addresses Policy Changes
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Economic Impact of New Policies
                </Link>
                <Link href="#" className="block hover:text-primary">
                  International Response to Development
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Analysis: Long-term Implications
                </Link>
                <Link href="#" className="block hover:text-primary">
                  Expert Commentary on Global Changes
                </Link>
              </div>
            </section>

            {/* Share Article */}
            <section className="border rounded-lg p-4">
              <h3 className="font-bold mb-4">Share This Article</h3>
              <div className="space-y-2">
                <button className="w-full text-left text-sm text-muted-foreground hover:text-primary">
                  Share on Twitter
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-primary">
                  Share on Facebook
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-primary">
                  Share on LinkedIn
                </button>
                <button className="w-full text-left text-sm text-muted-foreground hover:text-primary">
                  Copy Link
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <GenFooter />
    </div>
  );
}