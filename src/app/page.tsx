import Banner from "@/components/Banner";
import Events from "@/components/Events";
import Newsletter from "@/components/Newsletter";
import FeatureBanner from "@/components/FeatureBanner";

export default async function Home() {
 
  return (
    <>
    <Banner />
    <Events />
    <FeatureBanner />
    <Newsletter />
    </>
  )
}
