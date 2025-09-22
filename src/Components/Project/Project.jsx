import { BiSolidCategory } from "react-icons/bi"
import projectInfo from "./projectInfo"


const Project = () => {
    return (
        <>
            <div id="projects" className="pt-20 pb-7 max-w-[1300px] mx-auto px-5">
                <h1
                    data-aos="fade-down"
                    className="text-3xl font-bold">Projects</h1>

                {/* project */}
                <div className="flex flex-col gap-5 flex-wrap mt-7">
                    {
                        projectInfo?.map((project, index) =>
                            <>
                                <div
                                    data-aos="fade-right"
                                    key={index}
                                    className="w-full bg-dark_green rounded-xl py-3 px-5"
                                >
                                    <div className="flex items-center justify-between py-3">
                                        <div className="w-auto">
                                            <div className="flex gap-2 items-center">
                                                <div className="w-auto">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-xl border border-dark_green">
                                                            <img src={project?.image} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-auto p-2 space-y-1">
                                                    <h3 className="flex items-center gap-1 text-xs font-medium text-textSmallGray">
                                                        <BiSolidCategory
                                                            title="category"
                                                            className="text-gray-400"
                                                            style={{ width: "12px", height: "12px" }}
                                                        />
                                                        <span className="text-gray-400">{project?.category}</span>
                                                    </h3>
                                                    {
                                                        project?.link ?
                                                            <>
                                                                <a title="See Details" href={project?.link}>
                                                                    <h2 className="text-base font-semibold my-1">
                                                                        {project?.title}
                                                                    </h2>
                                                                </a>
                                                            </>
                                                            :
                                                            <>
                                                                <h2 className="text-base font-semibold my-1">
                                                                    {project?.title}
                                                                </h2>
                                                            </>
                                                    }
                                                    <p className="text-base text-gray-400">
                                                        {project?.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <button className='px-3 py-4 rounded-xl hover:border hover:border-button_color font-semibold text-sm lg:text-md'><a href="#projects">See Project</a></button> */}

                                        {/* new */}
                                        {
                                            project?.link ?
                                                <>
                                                    <a href={project?.link}>
                                                        <button className="projectBtn">
                                                            <span>See Project</span>
                                                        </button>
                                                    </a>
                                                </>
                                                :
                                                <></>
                                        }

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

export default Project
