import React from "react";
import Navbar from "./Navbar";
import AvatarSec from "./AvatarAndDetails";
import ProfileDetails from "./ProfileDetails";
import VerifySec from "./VerifiedStatus";
import ProgramsEnrolled from "./ProgramsSection";
import SubmitReport from "./SubmitReport";

export default function Profile(){
    return (
        <>
        
        <div className="row">
            <div className="col col-4">
                <AvatarSec/>
                <ProgramsEnrolled/>
                <SubmitReport/>
            </div>
            
            <div className="col ">
                <ProfileDetails/>
                <div className="row">
                
                <div className="col col-5">
                    <VerifySec heading="Verified Posts"/>
                </div>

                <div className="col col-5">
                    <VerifySec heading="Unverified Posts"/>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}