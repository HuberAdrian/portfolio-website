import React from 'react'
import useCollapse from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';

function Collapsible(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const {header, text, bullet_list=false} = props;

    let rendered_text = text;
    if (bullet_list) {
        rendered_text = (<ul>{
            text.map((point, index) => <li key={index}>{point}</li>)
        }</ul>)
    }
  
  
    return (
        <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {header} {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {rendered_text}
            </div>
        </div>
    </div>
    )
}

export default Collapsible
