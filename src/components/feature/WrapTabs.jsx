import {examples} from "../../Data/appData"
import Button from "../Ui/Button"
import {useState} from "react"

const tabsButton = [];

for( const key in examples){
    tabsButton.push(key);
}

export default function WrapTabs() {


const [activeTab, setActiveTab]  = useState(null);
const selectedTabContent = examples[activeTab];

  function handleTabs(selectedTab){
    
    
    setActiveTab(selectedTab);
  }


  return (

    
<>
    <ul className="flex gap-4">
        {tabsButton.map(element => 
             <li  key={element}><Button className={`capitalize ${activeTab === element ? "text-primary" : ""}`} onClick={() => handleTabs(element)} >{element}</Button></li>
            
        )}
    </ul>
    <div className=" bg-slate-500/50 py-4 px-4 mt-4">
        {selectedTabContent ? (
            <div>
                <h3 className="py-4">{selectedTabContent.title}</h3>
                <p className="text-center py-4">{selectedTabContent.description}</p>
                <code className="text-center">{selectedTabContent.code}</code>
            </div>
        ) : "please select a topic"}
    </div>
</>
  )
}
