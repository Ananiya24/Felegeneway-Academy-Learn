import { About } from "../components/About";
import { PageHeader } from "../components/PageHeader";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Felegeneway"
        title="A strong start for a bright future."
        description="Learn about the people, values, and daily care that shape life at Felegeneway Academy."
      />
      <About />
    </>
  );
}