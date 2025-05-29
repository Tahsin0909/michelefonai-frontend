import { fakeProperties } from "@/components/data/fakeProperty";
import RecentProperties from "@/components/RecentProperties";

const page = () => {
  return (
    <div>
      <RecentProperties properties={fakeProperties} />
    </div>
  );
};

export default page;