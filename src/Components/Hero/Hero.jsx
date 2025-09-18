import Spline from '@splinetool/react-spline';
// import noise from '../../assets/background/bg_0.svg'
import noise_2 from '../../assets/background/bg_1.svg'


const Hero = () => {
    return (
        <>
            <section className="relative h-screen flex justify-center items-center bg-[radial-gradient(circle,#00bf8f_0%,#001510_100%)] p-5"
                // style={{
                //     backgroundImage: `url(${noise}), url(${noise_2})`,
                //     backgroundRepeat: "no-repeat, no-repeat",
                //     backgroundPosition: "top, right top",
                //     backgroundSize: "cover, cover",
                //     backgroundAttachment: "fixed, fixed", // ✅ Parallax effect for backgrounds
                // }}
                style={{
                    backgroundImage: `url(${noise_2})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top",
                    backgroundSize: "cover",
                }}
            >
                {/* Spline Animation */}
                <div className="absolute inset-0 z-0">
                    <Spline scene="https://prod.spline.design/iGIuaUCOI6vyxLgG/scene.splinecode" />
                </div>

                {/* Text */}
                <div className="relative z-10 text-center max-w-3xl mt-32">
                    <h1 className="text-9xl font-bold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(83,168,182,1))] text-transparent bg-clip-text">
                        EcoNova
                    </h1>
                    <p className='text-lg font-semibold mt-7 mb-10'>
                        Youth innovation for green futures.
                        We are a youth-driven team harnessing the power of AI and sustainable technologies to design intelligent solutions for climate resilience. Our mission is to create scalable innovations that protect ecosystems, empower communities, and shape a sustainable future for generations to come.
                    </p>
                    <button className='px-10 py-5 rounded-xl bg-gradient-to-b from-white to-[#53a8b6] shadow-[2px_4px_12px_#53a8b6] text-black font-semibold text-2xl'><a href="#projects">See Projects</a></button>
                    {/* <button className='px-10 py-5 rounded-xl bg-[#53a8b6] text-white font-bold text-xl mr-3'><a href="#projects">See Projects</a></button> */}
                </div>
            </section>
        </>
    )
}

export default Hero
