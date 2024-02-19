import {coreConcepts} from "../../Data/appData"


export default function WraperConcept() {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-16 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 lg:gap-4">{
        coreConcepts.map(element => 
        <li className=" bg-slate-500/50 text-center py-8 px-4" key={element.id}>
        <img className="mx-auto" src={element.image} alt="" />
        <h3 className="font-bold py-4">{element.title}</h3>
        <p>{element.description}</p>
        </li>)}
       
      </ul>
    </div>
  )
}
