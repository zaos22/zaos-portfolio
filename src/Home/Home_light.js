import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { FaAngleDown } from 'react-icons/fa';

function Home() {
    const name = 'Oussama ';
    const lastName = 'Zazou';
    const [typedName] = useState(name);
    const [typedLastName] = useState(lastName);
    const jobTitle = 'Developer Web';
    const [typedJobTitle] = useState(jobTitle);

    return (
        <div className="colorbg">
            <Container className='text-overflow white-space'>
                <div className="font-size-name">
                    {typedName + typedLastName}
                </div>
                <div className="job">
                    {typedJobTitle}
                </div>
                <div className='ArrowDown'>
                    <FaAngleDown></FaAngleDown>
                </div>
            </Container>
        </div>
    );
}

export default Home;
