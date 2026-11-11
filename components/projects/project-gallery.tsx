import Image from "next/image";
import type { ProjectCaseStudy } from "@/lib/types";

type ProjectGalleryProps = {
  images: ProjectCaseStudy["images"];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="gallery-heading">
      <h2 id="gallery-heading" className="font-heading text-2xl font-semibold text-foreground">
        Project visuals
      </h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {images.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-2xl border border-white/10 bg-surface">
            <Image
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              className="h-auto w-full object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
