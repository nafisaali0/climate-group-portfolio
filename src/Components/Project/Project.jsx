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
                <div className="grid gap-3 mt-7">
                    {
                        projectInfo?.map((project, index) =>
                            <>
                                <div data-aos="fade-right" key={index} className="flex flex-col justify-start">
                                    <div
                                        className="relative w-full flex flex-col md:flex-row md:space-x-2 space-y-3 p-3 rounded-xl shadow-lg border border-dark_green bg-dark_green">
                                        <div className="p-2 sm:w-1/2">
                                            <img className="rounded-xl object-cover w-full h-full" src={project?.image} alt="image" />
                                        </div>
                                        <div className="w-full md:w-2/3 h-full flex flex-col p-3 space-y-2">
                                            <div className="flex items-center">
                                                <BiSolidCategory title="category" className="text-textSmallGray" style={{ width: '20px', height: '20px' }} />
                                                <span href="#" className="mx-2 text-sm text-gray-400 font-medium">{project?.category}</span>
                                            </div>
                                            {
                                                project?.link ?
                                                    <>
                                                        <a href={project.link}>
                                                            <h3 className="text-base">{project?.title}</h3>
                                                        </a>
                                                    </>
                                                    :
                                                    <>
                                                        <h3 className="text-base">{project?.title}</h3>
                                                    </>
                                            }
                                            <p className="text-base text-gray-400">{project?.description}</p>

                                            <div className="self-end">
                                                {
                                                    project?.link ?
                                                        <>
                                                            <a href={project?.link} target="_blank">
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
