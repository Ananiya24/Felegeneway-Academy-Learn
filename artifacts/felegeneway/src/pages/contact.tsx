import { Contact } from "../components/Contact";
import { PageHeader } from "../components/PageHeader";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s stay connected."
        description="Find us in Lebu, Addis Ababa, or reach out to our school team directly."
      />
      <Contact />
    </>
  );
}