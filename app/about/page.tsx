import GenFooter from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Daily News</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-4">
            At Daily News, we are committed to delivering accurate, timely, and
            impactful news to our readers. Our mission is to inform, educate,
            and empower our audience with high-quality journalism that matters.
          </p>
          <p className="text-lg text-muted-foreground">
            We believe in the power of information to shape a better world.
            Through our reporting, we aim to foster understanding, promote
            transparency, and inspire positive change in our communities and
            beyond.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Daily News Headquarters"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-muted-foreground mb-4">
                Founded in 2010, Daily News has grown from a small local
                publication to a trusted source of news for millions of readers
                worldwide. Our journey has been driven by a passion for
                storytelling and a commitment to journalistic integrity.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the years, we've expanded our coverage to encompass a wide
                range of topics, from breaking news and politics to technology,
                culture, and beyond. Through it all, we've remained dedicated to
                our core values of accuracy, fairness, and independence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Jane Doe',
                role: 'Editor-in-Chief',
                image: '/placeholder.svg',
              },
              {
                name: 'John Smith',
                role: 'Senior Political Correspondent',
                image: '/placeholder.svg',
              },
              {
                name: 'Emily Johnson',
                role: 'Technology Editor',
                image: '/placeholder.svg',
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Accuracy and fact-based reporting</li>
            <li>Editorial independence</li>
            <li>Ethical journalism practices</li>
            <li>Diversity and inclusion in our coverage and our team</li>
            <li>Innovation in digital storytelling</li>
            <li>Commitment to our readers and communities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground mb-4">
            We value your feedback and are always eager to hear from our
            readers. Whether you have a story tip, a question about our
            coverage, or just want to say hello, we'd love to hear from you.
          </p>
          <Link
            href="/contact"
            className="text-primary hover:underline text-lg"
          >
            Get in touch with our team &rarr;
          </Link>
        </section>
      </main>

      <GenFooter />
    </div>
  );
}
