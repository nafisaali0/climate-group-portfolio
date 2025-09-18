import Spline from '@splinetool/react-spline';
import noise from '../../assets/background/bg_1.svg'


const Hero = () => {
    return (
        <>
            <section id='home' className="relative h-screen flex justify-center items-center bg-[radial-gradient(circle,#00bf8f_0%,#001510_100%)] p-5"
                style={{
                    backgroundImage: `url(${noise})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}
            >
                {/* Spline Animation */}
                <div className="absolute inset-0 z-0 lg:w-full">
                    <Spline scene="https://prod.spline.design/iGIuaUCOI6vyxLgG/scene.splinecode" />
                </div>

                {/* Text */}
                <div className="relative z-10 text-center max-w-3xl mt-32">
                    <h1 className="text-8xl font-bold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(83,168,182,1))] text-transparent bg-clip-text">
                        EcoNova
                    </h1>
                    <p className='text-md font-medium my-5 lg:my-7'>
                        Youth innovation for green futures.
                        We are a youth-driven team harnessing the power of AI and sustainable technologies to design intelligent solutions for climate resilience. Our mission is to create scalable innovations that protect ecosystems, empower communities, and shape a sustainable future for generations to come.
                    </p>
                    <button className='p-5 rounded-xl bg-gradient-to-b from-gray-300 to-[#53a8b6] shadow-[2px_4px_12px_#53a8b6] text-white font-medium text-md'><a href="projects">See Projects</a></button>
                </div>
            </section >
        </>
    )
}

export default Hero
