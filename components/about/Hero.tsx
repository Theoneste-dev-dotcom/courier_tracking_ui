import Image from "next/image";
import driver from "@/public/assets/images/driver.png";
export default function Hero() {
  return (
    <div className="hero  min-h-auto py-20 flex flex-row flex-wrap items-center justify-center gap-4">
      <div className="hero-content text-left flex flex-col gap-4">
        <div className="max-w-md flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Delivering Packages, Connecting Businesses
          </h1>
          <p className="mt-4 text-lg">
            We simplify courier management with real-time tracking and seamless
            logistics solutions.
          </p>
          <button className="btn btn-primary w-1/4">Get Started</button>
        </div>
      </div>

      <div>
        <Image src={driver} className="rounded-xl" alt="driver" width={500} height={500} />
      </div>
    </div>
  );
}
