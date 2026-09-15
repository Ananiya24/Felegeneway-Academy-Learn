import { Gallery } from "../components/Gallery";
import { PageHeader } from "../components/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look inside our school."
        description="See the people, learning, and moments that make Felegeneway special."
      />
      <Gallery />
    </>
  );
}