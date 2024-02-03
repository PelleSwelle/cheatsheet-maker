import { designPatterns } from './DesignPatterns';
import KnowledgeElement from './KnowledgeElement';
export default function Viewer({style}) {
    
    let typesOfPatterns = designPatterns.map(group =>
        <div>
            <h2> {group.name} </h2>
            <p> {group.description} </p>
            <ul>
                {group.elements.map(pattern => 
                    <KnowledgeElement
                        name={pattern.name}
                        description={pattern.description}
                    />
                )}
            </ul>
        </div>
    )

    return (
        <div className="viewer">
            <h1 className='header'>Design Patterns</h1>
            <div className='divider'></div>
            <div className={style}>
                {typesOfPatterns}
            </div>
        </div>
    )
}