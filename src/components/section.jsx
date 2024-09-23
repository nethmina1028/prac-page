import { HiCheckCircle } from "react-icons/hi";

function section() {
  return (
    <div className="flex flex-row gap-10 p-36">
      
      <div>
      <h1 className="font-extrabold text-gray-900 text-[2rem] mb-4">Work with tools you already use</h1>
      <div className="mb-8">
        <p className="text-xl font-normal text-gray-500 ">Deliver great service experiences fast - without the complexity <br /> 
        of traditional ITSM solutions.Accelerate critical development <br /> 
        work, eliminate toil, and deploy changes with ease.</p>
        </div>
        <div className="mb-8">
        <hr/>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Continuous integration and deployment</p>
       
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Deployment workflow</p>
        </div>
        <div className="flex flex-row items-center gap-2 my-2">
          <HiCheckCircle color="#7E3AF2"/>
        <p className="text-base font-medium text-gray-900">Knowledge management</p>
        </div>
        <div className="my-6">
        <p className="text-xl font-normal text-gray-500">Deliver great service experiences fast - without the complexity <br /> of traditional ITSM solutions.</p>
        </div>
      </div>
        
        <div>
        <img src="src/assets/features-1 1.png" className=""></img>
        </div>
       
        
    </div>
  )
}

export default section