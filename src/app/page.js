import Between from "@/Ui/Between";
import Hero from "@/components/hero/Hero";
import Properties from "@/components/properties/Properties";
import Slider from "@/components/slider/Slider";

export default function Home() {
    return (
        <main>
            <Hero />
            <Between content="Our Projects" />
            <Slider />
            <Between content="Favorite properties" />
            <Properties />
        </main>
    );
}
