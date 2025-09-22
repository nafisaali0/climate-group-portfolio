import { ImLinkedin } from "react-icons/im"
import membersInfo from "./membersInfo"
import { FaGithubSquare, FaResearchgate } from "react-icons/fa"
import { FaSquareFacebook } from "react-icons/fa6"
import { RiGlobalLine } from "react-icons/ri"


const GroupMembers = () => {
    return (
        <>
            <div id="members" className="pt-20 pb-7 max-w-[1300px] mx-auto p-5">
                <h1
                    data-aos="fade-down"
                    className="text-3xl font-bold">Team Members</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
                    {
                        membersInfo?.map((member, index) => (
                            <>
                                <div
                                    data-aos="fade-left"
                                    key={index}
                                    className="card space-y-1 bg-dark_green rounded-3xl hover:shadow-xl">
                                    <figure>
                                        <img
                                            src={member?.image}
                                            alt="blog"
                                            className="w-full h-[400px] overflow-hidden object-cover" />
                                    </figure>
                                    <div className="p-5">
                                        <h1 className="font-bold text-md">{member?.name}</h1>
                                        <h1 className="mb-2 text-sm font-medium">{member?.education}</h1>
                                        <div className="card-actions justify-end pt-2 text-white">
                                            <a
                                                href={member?.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <ImLinkedin size={28} />
                                            </a>

                                            {member?.github && (
                                                <a
                                                    href={member?.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    <FaGithubSquare size={30} />
                                                </a>
                                            )}

                                            {member?.portfolio && (
                                                <a
                                                    href={member?.portfolio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    <RiGlobalLine size={30} />
                                                </a>
                                            )}

                                            {member?.researchGate && (
                                                <a
                                                    href={member?.researchGate}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    <FaResearchgate size={30} />
                                                </a>
                                            )}

                                            <a
                                                href={member?.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="transition-all duration-300 hover:-translate-y-1"
                                            >
                                                <FaSquareFacebook size={30} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default GroupMembers
