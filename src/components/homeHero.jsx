import Hero from "@/components/layout/hero";

export default function HomeHero() {
    return (
        <div className="min-h-[1000px]">
            <div className="absolute top-550 z-20 mx-auto w-full h-[1000px] inset-0 bg-gradient-to-b from-transparent to-blue-900"></div>
            <div className={"absolute z-30 mx-auto w-full h-[1000px] inset-0 bg-black opacity-40"}></div>
            <Hero/>
            <video className={"absolute inset-0 w-full h-[1000px] bg-no-repeat object-cover z-0"} autoPlay loop muted
                   poster="/public/bg_hero.png">
                {/* Crédit for the video : Hack The Box, academy website */}
                <source src="https://academy-cdn.hackthebox.com/public/production/videos/frontpage/hero-video.webm"
                        type="video/webm"/>
            </video>
        </div>
    )
}