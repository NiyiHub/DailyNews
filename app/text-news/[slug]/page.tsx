'use client';

import GenFooter from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';
import EngagementButtons from '@/components/ui/engagement-buttons';
import CommentsModal from '@/components/ui/comments-modal';

// Update the interface to include engagement fields
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  slug: string;
  comments: Array<{ id: number; text: string; created_at: string }>;
  likes: Array<{ id: number; created_at: string }>;
  shares: Array<{ id: number; platform: string; created_at: string }>;
}

// Convert to client component
export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);
  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(true);

//   const art =  {
//     "id": 1,
//     "published_content": 1,
//     "title": "Unveiling the Future: The Transformative Power of AI and Machine Learning",
//     "content": "From enhancing customer experiences to revolutionizing healthcare, these technologies are transforming the world at an unprecedented pace. This article explores the current state of AI and ML, their applications, and the potential future these technologies hold.\r\n\r\n**The Foundations of AI and ML**\r\n\r\nAt their core, AI refers to the ability of machines to mimic human cognitive functions such as learning, problem-solving, and decision-making. Machine Learning, a subset of AI, involves the use of algorithms and statistical models to enable computers to improve their performance on tasks over time with minimal human intervention. These technologies draw heavily on data, leveraging vast datasets to train models that can recognize patterns and make predictions.\r\n\r\n**Current Applications**\r\n\r\n1. **Healthcare:**\r\n   AI and ML are making significant strides in the healthcare sector. From early disease detection to personalized medicine, AI algorithms analyze complex datasets, offering insights that enhance diagnostic accuracy and treatment plans. For example, machine learning models are used to interpret medical images, detect anomalies, and predict patient outcomes, thereby improving the efficiency of healthcare delivery.\r\n\r\n2. **Finance:**\r\n   In the financial sector, AI is employed for fraud detection, risk management, and algorithmic trading. Machine learning models analyze transaction patterns to identify fraudulent activities, while AI-driven chatbots enhance customer service by handling queries in real-time.\r\n\r\n3. **Retail:**\r\n   Retail businesses leverage AI and ML to optimize inventory management, forecast demand, and personalize customer experiences. Through recommendation engines and predictive analytics, companies can deliver tailored marketing strategies, fostering customer loyalty and increasing sales.\r\n\r\n4. **Autonomous Vehicles:**\r\n   AI and ML are the backbone of autonomous driving technology. Through real-time data processing from sensors and cameras, AI systems enable vehicles to navigate safely, recognize obstacles, and make informed decisions on the road.\r\n\r\n**Challenges and Ethical Considerations**\r\n\r\nDespite their transformative potential, AI and ML pose several challenges that must be addressed. The reliance on vast datasets raises concerns about privacy and data security. Additionally, bias in algorithms, often resulting from skewed training data, can lead to unfair outcomes in areas such as hiring and law enforcement.\r\n\r\nEthical considerations also extend to the potential displacement of jobs due to automation. While AI can enhance productivity, it is crucial to consider the social and economic implications and prioritize strategies for workforce reskilling and transition.\r\n\r\n**The Future of AI and ML**\r\n\r\nLooking ahead, the future of AI and ML is filled with possibilities. As computational power continues to grow and algorithms become more sophisticated, the potential applications of these technologies will expand. Emerging fields such as reinforcement learning and quantum computing could further accelerate progress.\r\n\r\nMoreover, interdisciplinary collaboration will be key to harnessing the full potential of AI and ML. By integrating insights from fields such as psychology, neuroscience, and ethics, AI developers can create systems that are not only powerful but also aligned with human values.\r\n\r\n**Conclusion**\r\n\r\nAI and Machine Learning are not just technological advancements; they are catalysts for a new era of innovation. While challenges exist, the benefits they offer across various sectors are profound. As we stand on the brink of this technological revolution, it is imperative to navigate these advancements with caution, ensuring that the deployment of AI and ML technologies is both ethical and inclusive, ultimately enhancing the human experience.",
//     "image_url": "https://niyiblack.wordpress.com/wp-content/uploads/2025/03/google-logo-uhd-4k-wallpaper.jpg",
//     "created_at": "2025-03-19T01:31:27.182625Z",
//     "likes": [
//         {
//             "id": 1,
//             "created_at": "2025-03-19T01:34:05.260827Z"
//         },
//         {
//             "id": 2,
//             "created_at": "2025-03-19T02:38:49.296134Z"
//         }
//     ],
//     "comments": [
//         {
//             "id": 1,
//             "written_image_content": 1,
//             "text": "This is my comment on the article.",
//             "created_at": "2025-03-19T01:34:50.238841Z"
//         },
//         {
//             "id": 2,
//             "written_image_content": 1,
//             "text": "This is my comment on the article.",
//             "created_at": "2025-03-19T02:39:16.853288Z"
//         }
//     ],
//     "shares": [
//         {
//             "id": 1,
//             "written_image_content": 1,
//             "platform": "X",
//             "created_at": "2025-03-19T01:35:38.469907Z"
//         },
//         {
//             "id": 2,
//             "written_image_content": 1,
//             "platform": "X",
//             "created_at": "2025-03-19T02:39:43.782477Z"
//         }
//     ]
// }

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(
          'https://daily-news-5k66.onrender.com/news/written/get/'
        );
        const articles: Article[] = await response.json();
        // console.log(articles);
        const articleId = parseInt(params.slug);
        // console.log(articleId);
        const foundArticle = articles[articleId - 1];
        // setArticle(foundArticle || null);
      } catch (error) {
        console.error('Error fetching article:', error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[1fr,300px] gap-8">
          {/* Main Content */}
          <article className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{article.category}</span>
                <span>•</span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString()}
                </time>
              </div>
              <h1 className="text-4xl font-bold">{article.title}</h1>
              <div className="flex items-center gap-2 text-sm">
                <span>By {article.author}</span>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Add engagement section */}
            <div className="flex items-center justify-between border-t pt-4">
              <EngagementButtons
                newsId={article.id}
                initialLikes={article.likes.length}
                initialShares={article.shares.length}
              />
              <button
                onClick={() => setShowComments(true)}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <span>💬 {article.comments.length}</span>
              </button>
            </div>

            {showComments && (
              <CommentsModal
                newsId={article.id}
                initialComments={article.comments}
                onClose={() => setShowComments(false)}
              />
            )}

            <div className="flex items-center gap-4 pt-6">
              <Link href="/text-news" className="text-primary hover:underline">
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
                <span className="text-muted-foreground">Ad Space</span>
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
