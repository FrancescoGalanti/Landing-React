
import WraperConcept from "../concept/WraperConcept";
import WrapTabs from "../feature/WrapTabs";
import Heading from "../typography/Heading";
import Section from "./Section";


export default function Main(){
    return(
        <main>
          <Section>
            <Heading ifCenter>Core Concept</Heading>
            <WraperConcept/>
          </Section>
          <Section>
            <Heading>Example</Heading>
            <WrapTabs />
          </Section>
        </main>

    )
}