import Spline from '@splinetool/react-spline';
import ParticlesBackground from './ParticlesBackground';


const Hero = () => {
    return (
        <>
            <section className="h-screen flex justify-center items-center  bg-[radial-gradient(circle,#00bf8f_0%,#001510_100%)]">                
                {/* <ParticlesBackground /> */}
                <Spline scene="https://prod.spline.design/iGIuaUCOI6vyxLgG/scene.splinecode" />
                {/* <Spline scene="https://prod.spline.design/iGIuaUCOI6vyxLgG/scene.splinecode" /> */}
            </section>
        </>
    )
}

export default Hero
