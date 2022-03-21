import React from 'react'
import useCollapse from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';

function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  
    return (
        <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            Description {isExpanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>
    )
}

export default Collapsible
