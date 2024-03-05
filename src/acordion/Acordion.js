import { AccordionItem } from "./AcordionItem";
import { list } from "./list";
import './style.css';

export const Accordion=() => {
    return(<div>
        {list.map((item, index) =>
        <AccordionItem key={item.title} title={item.title} content={item.content}/>
        )}
    </div>)
    
}