import React from "react";

export default function ProfileDetails(){
  const data={
    name:"Johnatan Smith",
    email:"JohnnyBhaiya@gmail.com",
    phone:"(097) 234-5678",
    mobile:"(098) 765-4321",
    address:"Bay Area, San Francisco, CA"
  }
    return (
        <>
        <div class="col-lg-8 ps-2 mt-5">
        <div class="mt-4 pt-4">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-3  pb-2">
                <p class="mb-0">Full Name :</p>
              </div>
              <div class="col-sm-9  pb-2">
                <p class="text-muted mb-0">{data.name}</p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-3  pb-2">
                <p class="mb-0">Email :</p>
              </div>
              <div class="col-sm-9  pb-2">
                <p class="text-muted mb-0">{data.email}</p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-3  pb-2">
                <p class="mb-0">Phone :</p>
              </div>
              <div class="col-sm-9  pb-2">
                <p class="text-muted mb-0">{data.phone}</p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-3  pb-2">
                <p class="mb-0">Mobile :</p>
              </div>
              <div class="col-sm-9  pb-2">
                <p class="text-muted mb-0">{data.mobile}</p>
              </div>
            </div>
            
            <div class="row">
              <div class="col-sm-3  pb-2">
                <p class="mb-0">Address :</p>
              </div>
              <div class="col-sm-9  pb-2">
                <p class="text-muted mb-0  pb-2">{data.address}</p>
              </div>
            </div>
          </div>
          </div>
          </div>
    
        </>
    )
}