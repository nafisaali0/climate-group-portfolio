import logo from "../../assets/logo/logo_1-removebg.png"
import noise from "../../assets/background/bg_1.svg"

const Footer = () => {
    return (
        <>
            <footer
                className="footer footer-horizontal footer-center bg-dark_green p-10"
                style={{
                    backgroundImage: `url(${noise})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right top",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed"
                }}>
                <aside>
                    <div
                        data-aos="fade-right"
                        className="navbar-start">
                        <figure className="w-20">
                            <a href="#home">
                                <img
                                    src={logo}
                                    alt="logo" />
                            </a>
                        </figure>
                    </div>
                    <p className="text-md font-medium">© {new Date().getFullYear()} -
                        <a href="#home">EcoNova</a>
                    </p>
                    <p className="text-md font-medium">Created by -
                        <a
                            href="https://github.com/nafisaali0"
                            className="hover:text-light_green">Nafisa Ali</a>
                    </p>
                </aside>
            </footer>
        </>
    )
}

export default Footer
