import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaAngleDown } from 'react-icons/fa';

function HomeDark() {
    const name = 'Ossama ';
    const lastName = 'Abid';
    const [typedName] = useState(name);
    const [typedLastName] = useState(lastName);
    const jobTitle = 'Developer Web';
    const [typedJobTitle] = useState(jobTitle);
    return (
        <div className="space">
            <Container className="space-container text-overflow white-space">
                <div className="chaos" />
                <div className="planet"><div className="chaos" /></div>
                <div className="font-size-name floatxt">
                    {typedName + typedLastName}
                </div>
                <div className="job floatxt">
                    {typedJobTitle}
                </div>
                <div className='ArrowDown text-white'>
                    <FaAngleDown />
                </div>
            </Container>
        </div>
    );
}

export default HomeDark;
