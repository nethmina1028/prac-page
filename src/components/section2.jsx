import { HiCheckCircle } from "react-icons/hi";
function section2() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 mt-10 md:flex-row">
        <div className="md:w-1/2"> 
        <img src="src/assets/feature-2 1.png" className="object-cover w-full h-auto"></img>
        </div>
        <div className="md:w-1/2">
      <h1 className="font-extrabold text-gray-900 text-[2rem] mb-4">We invest in the world's potential</h1>
      <div className="mb-8">
        <p className="text-xl font-normal text-gray-500 ">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
        </div>
        <div className="mb-8">
        <hr/>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Dynamic reports and dashboards</p>
       
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Templates for everyone</p>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Development workflow</p>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Limitless business automation</p>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Knowledge management</p>
        </div>
      </div>
    </div>
  )
}

export default section2