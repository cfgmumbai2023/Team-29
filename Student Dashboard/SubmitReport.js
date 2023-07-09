import React from "react"
import { Link } from "react-router-dom"

export default function SubmitReport(){
    return (
        <>
        <div className="container mt-4 ms-1">
            
            <Link to="/reportform">
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" >
                Upload Work
            </button>
            </Link>
        </div>
        
        </>
    )
}