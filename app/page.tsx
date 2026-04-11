import { Hero } from "@/components/home/Hero";
import { Gallery } from "@/components/home/Gallery";
import { NewsAndEvents } from "@/components/home/NewsAndEvents";
import { Videos } from "@/components/home/Videos";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Hero />
      <Gallery />
      <NewsAndEvents />
      <Videos />
      <Testimonials />
    </div>
  );
}
