import { News } from "../components/News";
import { PageHeader } from "../components/PageHeader";

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Campus Life"
        title="News and events"
        description="Keep up with the achievements, activities, and new learning opportunities at Felegeneway Academy."
      />
      <News />
    </>
  );
}