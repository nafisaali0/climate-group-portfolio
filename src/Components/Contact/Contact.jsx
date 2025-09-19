import contactInfo from "./contactInfo"

const Contact = () => {
    return (
        <>
            <div id="contact" className="pt-20 pb-7 max-w-[1300px] mx-auto p-5">
                <h1
                    data-aos="fade-down"
                    className="text-3xl text-center font-bold">Get In Touch</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7">
                    {
                        contactInfo.map((info, index) =>
                            <>
                                <div
                                    data-aos="fade-right"
                                    key={index}>
                                    <div className="card">
                                        <div className="card1">
                                            <p className="font-bold">{info.name}</p>
                                            <a href={info.link}>
                                                <p className="small">{info.info}</p>
                                            </a>
                                            <div className="go-corner" href="#">
                                                <div className="go-arrow">
                                                    ★
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>


        </>
    )
}

export default Contact
