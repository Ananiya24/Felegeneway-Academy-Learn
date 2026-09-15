import { PageHeader } from "../components/PageHeader";
import { Programs } from "../components/Programs";
import { Stats } from "../components/Stats";

export default function ProgramsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title="Our school programs"
        description="Thoughtful learning for every stage, from a caring start in kindergarten through preparation for university."
      />
      <Programs />
      <Stats />
    </>
  );
}