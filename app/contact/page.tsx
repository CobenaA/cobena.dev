import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Contact",
};

export default function ContactPage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        let's connect!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">

      <h1><a href={"https://www.linkedin.com/in/ariel-cobena/"}><b>linkedin</b></a></h1>

      <h1><a href={"https://github.com/CobenaA"}><b>github</b></a></h1>
      
      <h1>shoot me an email: ariel@cobena.dev</h1>

      </div>
    </section>
  );
}
