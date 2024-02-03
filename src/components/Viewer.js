import { designPatterns } from './DesignPatterns';

export default function Viewer({style}) {
    let typesOfPatterns = designPatterns.map(group =>
        <div>
            <h2> {group.name} </h2>
            <p> {group.decription} </p>
            <ul>
                {group.elements.map(pattern => 
                    <li key={pattern.id}>
                        {pattern.name}
                        <p>{pattern.description}</p>
                    </li>)}
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