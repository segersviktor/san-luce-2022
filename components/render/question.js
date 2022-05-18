import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Question = (props) => {

    const [active, setActive] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => { setActive(!active); };

    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    return (
        <div className="questions__item" onClick={ toggleAccordion }>
            <div className={ active ? 'questions__item--question is-active' : 'questions__item--question' } ref={ contentRef }>
                <span>{ props.question }</span>
                <span className="questions__item--icon">
                    <FontAwesomeIcon icon={ faPlus }/>
                </span>
            </div>
            <div className={ active ? 'questions__item--answer is-active' : 'questions__item--answer' } ref={ contentRef }>
                <ul>
                    { props.answer.map((item, key) => {
                        return (
                            <li key={ key } className="text">{ item }</li>
                        )
                    }) }
                </ul>
            </div>
        </div>
    );
};

export default Question;
