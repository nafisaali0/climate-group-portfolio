import membersInfo from "./membersInfo"


const GroupMembers = () => {
    console.log(membersInfo)

    return (
        <>
            <div className="py-20 max-w-[1300px] mx-auto p-5">
                <h1 className="text-5xl text-center">Team Members</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10">
                    {
                        membersInfo.map((member, index) => (
                            <>
                                <div key={index} className="card bg-dark_green shadow-sm">
                                    <figure>
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-lg font-bold">{member.name}</h2>
                                        <h2 className="text-md font-medium">{member.education}</h2>
                                        <div className="card-actions justify-end">
                                            <a href="">
                                                hello
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
