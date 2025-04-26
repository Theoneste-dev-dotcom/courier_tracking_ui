import Link from "next/link"
function TemplatePointers(){
    return(
        <>
         <h1 className="text-base-content text-2xl mt-8 font-bold">Welcome to the World of Efficiency & Trust</h1>
          <p className="text-base-content py-2 mt-4">✓ <span className="font-semibold">Well Featured Users management</span> </p>
          <p className="text-base-content py-2 ">✓ <span className="font-semibold">Shipmenet Management</span> and Shipmenent Owner management</p>
          <p className="text-base-content py-2">✓ <span className="font-semibold">Company Branches Management </span> & Fast access and manage them</p>
          <p className="text-base-content py-2  ">✓ We Provide a User Friendly and Easy to Use Interface About our Services <span className="font-semibold"> @ <Link href={`base/landing`} className={`underline`}>Here</Link> </span></p>
          <p className="text-base-content py-2  mb-4">✓ <span className="font-semibold">Tracking System for Client Packages(Couriers)</span> Using QR-Code Technology <span className="font-semibold">Mobile Phone Required</span></p>
        </>
    )
}

export default TemplatePointers