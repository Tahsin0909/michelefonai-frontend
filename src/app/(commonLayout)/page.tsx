import BlogList from "@/components/BlogList";
import { fakeFeatures } from "@/components/data/fakeFeature";
import { fakeProperties } from "@/components/data/fakeProperty";
import FeatureList from "@/components/FeatureList";
import RecentProperties from "@/components/RecentProperties";
import HeroSection from "@/components/shared/Pages/Home/HeroSection";
import TestimonialList from "@/components/TestimonialList";

const page = () => {
  return (
    <div>
      <HeroSection />
      <RecentProperties />
      <FeatureList features={fakeFeatures} />
      <BlogList />
      <TestimonialList />
    </div>
  );
};

export default page;