import React from "react"

export default function ProgramsEnrolled(){
    const data=[
        {
            subject:"DSA",
            guideName:"Mr. XYZ"
        },
        {
            subject:"Computer Networks",
            guideName:"Mr. WXY"
        }
    ]

    return (
        <>
        <div className="container w-75">
        <h5>Programs Enrolled</h5>

        <div>
        <ul class="list-group list-group-light " style={{"outline": "none"}}>
            {data.map((record) => {
                return (
                        <li class="list-group-item ">
                            <div>
                                <div class="fw-bold">{record.subject}</div>
                                <div class="text-muted">Guided By - {record.guideName}</div>
                            </div>
                        </li>
                        )
            })}
        </ul>
        </div>
        
        </div>
        </>
    )
}