import { useState } from 'react';

export default function Accordion() {
    // the active state and method to change it and set it to a default
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel
                title="About"
                // child checks active state
                isActive={activeIndex === 0}
                // child has a an event that can take the incoming state
                onShow={() => setActiveIndex(0)}
            >
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel
                title="Etymology"
                isActive={activeIndex === 1}
                onShow={() => setActiveIndex(1)}
            >
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}

// child has the state and the event that changes it
function Panel({ title, children, isActive, onShow }) {

    return (
        <section className="panel">
            <h3>{title}</h3> {
                isActive? (
                    <p>{children}</p>
                ) 
                : (
                    // child calls the event passed down from parent
                    <button onClick={onShow}>
                        Show
                    </button>
                    )
            }
        </section>
    );
}