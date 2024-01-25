import Area from './Area'
import Workbench from './workbench';
import Item from './Item';
import Accordion from './Accordion';
import SyncedText from './SyncedText';

const Sheet = {
    // dynamically load image depending on title? Do a search in the background an suggest images.
    image: Image,
    title: String,
    subtitle: String,

    fields: []
}

function Viewer() {
    const demoSheet = { 
        title: 'Design Patterns',
        elements: [
            new Item('Abstract factory', 'some description some description some description some description some description some description some description '),
            new Item('Builder', 'some description some description some description some description some description some description some description '),
            new Item('Factory Method', 'some description some description some description some description some description some description some description '),
            new Item('Prototype', 'some description some description some description some description some description some description some description '),
            new Item('Singleton', 'some description some description some description some description some description some description some description '),
            new Item('Adapter', 'some description some description some description some description some description some description some description '),
            new Item('Bridge', 'some description some description some description some description some description some description some description '),
            new Item('Composite', 'some description some description some description some description some description some description some description '),
            new Item('Decorator', 'some description some description some description some description some description some description some description '),
            new Item('Facade', 'some description some description some description some description some description some description some description '),
            new Item('Flyweight', 'some description some description some description some description some description some description some description '),
            new Item('Proxy', 'some description some description some description some description some description some description some description '),
            new Item('Chain of Responsibility', 'some description some description some description some description some description some description some description '),
            new Item('Command', 'some description some description some description some description some description some description some description '),
            new Item('Interpreter', 'some description some description some description some description some description some description some description '),
            new Item('Iterator', 'some description some description some description some description some description some description some description '),
            new Item('Mediator', 'some description some description some description some description some description some description some description '),
            new Item('Memento', 'some description some description some description some description some description some description some description '),
            new Item('Observer', 'some description some description some description some description some description some description some description '),
            new Item('State', 'some description some description some description some description some description some description some description '),
            new Item('Strategy', 'some description some description some description some description some description some description some description '),
            new Item('Template Method', 'some description some description some description some description some description some description some description '),
            new Item('Visitor', 'some description some description some description some description some description some description some description '),
        ] 
    }
    const heading = demoSheet.title
    const toRender = [];

    for (let i = 0; i < demoSheet.elements.length; i++) {
        toRender.push(
            <Area
                title={demoSheet.elements[i].title}
                description={demoSheet.elements[i].description}
            />
        )
    }

    return (
        <div className="viewer">
            <h1 className='header'>{heading}</h1>
            <div className='divider'></div>
            
            <div className='sheet-content'>
                <SyncedText/>
                {/* {toRender} */}
            </div>
        </div>
    )
}

export default Viewer;