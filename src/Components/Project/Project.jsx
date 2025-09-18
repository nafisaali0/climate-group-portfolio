import { BiSolidCategory } from "react-icons/bi"
import logo from "../../assets/logo/logo_1.png"


const Project = () => {
    return (
        <>
            <div id="projects" className="py-20 max-w-[1300px] mx-auto p-5">
                <h1 className="text-3xl font-bold">Team Members</h1>

                {/* project */}
                <div className="flex flex-col gap-5 flex-wrap mt-10">

                    <div
                        className="w-full bg-dark_green rounded-xl py-3 px-5"
                    >
                        <div className="flex items-center justify-between py-3">
                            <div className="w-auto">
                                <div className="flex gap-2 items-center">
                                    <div className="w-auto">
                                        <div className="avatar">
                                            <div className="w-16 rounded-xl border border-dark_green">
                                                <img src={logo} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto p-2 space-y-1">
                                        <h3 className="flex items-center gap-1 text-xs font-medium text-textSmallGray">
                                            <BiSolidCategory
                                                title="category"
                                                className="text-textSmallGray"
                                                style={{ width: "15px", height: "15px" }}
                                            />
                                            <span>none</span>
                                        </h3>
                                        <a title="See Details" href="">
                                            <h2 className="text-sm font-semibold">
                                                none
                                            </h2>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button className='px-3 py-4 rounded-xl hover:border hover:border-button_color font-semibold text-sm lg:text-md'><a href="#projects">See Project</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
