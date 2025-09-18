import { ImLinkedin } from "react-icons/im"
import membersInfo from "./membersInfo"
import { FaGithubSquare, FaResearchgate } from "react-icons/fa"
import { FaSquareFacebook } from "react-icons/fa6"
import { RiGlobalLine } from "react-icons/ri"


const GroupMembers = () => {
    return (
        <>
            <div id="members" className="py-20 max-w-[1300px] mx-auto p-5">
                <h1 className="text-3xl font-bold">Team Members</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
                    {
                        membersInfo?.map((member, index) => (
                            <>
                                {/* new check */}
                                <div key={index} className="card space-y-1 bg-dark_green hover:shadow-xl">
                                    <figure>
                                        <img
                                            src={member?.image}
                                            alt="blog"
                                            className="w-full h-[400px] overflow-hidden object-cover" />
                                    </figure>
                                    <div className="p-5">
                                        <h1 className="font-bold text-md">{member?.name}</h1>
                                        <p className="mb-2 text-sm font-medium">{member?.education}</p>
                                        <div className="card-actions justify-end pt-2">
                                            <a
                                                href={member?.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ImLinkedin size={28} color="#fff" />
                                            </a>
                                            {
                                                member?.github ?

                                                    <a
                                                        href={member?.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaGithubSquare size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            {
                                                member?.portfolio ?

                                                    <a
                                                        href={member?.portfolio}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <RiGlobalLine size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            {
                                                member?.researchGate ?
                                                    <a
                                                        href={member?.researchGate}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <FaResearchgate size={30} color="#fff" />
                                                    </a>
                                                    :
                                                    ""
                                            }
                                            <a
                                                href={member?.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaSquareFacebook size={30} color="#fff" />
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
