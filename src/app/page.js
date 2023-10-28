import Between from "@/Ui/Between";
import Hero from "@/components/hero/Hero";
import Slider from "@/components/slider/Slider";

export default function Home() {
    return (
        <main>
            <Hero />
            <Between content="Our Projects" />
            <Slider />
        </main>
    );
}
