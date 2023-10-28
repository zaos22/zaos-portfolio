import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import {FaAngleDown} from 'react-icons/fa';

function Skills() {
    const name = 'Oussama Abid';
    const lastName = 'Zazou';
    const [typedName, setTypedName] = useState('');
    const [nameIndex, setNameIndex] = useState(0);
    const [nameIndex2, setNameIndex2] = useState(0);
    const [typedLastName, setTypedLastName] = useState('');
    const [typingLastName, setTypingLastName] = useState(false);

    const jobTitle = 'Developer Web';
    const [typedJobTitle, setTypedJobTitle] = useState('');
    const [jobTitleIndex, setJobTitleIndex] = useState(0);

    useEffect(() => {
        const nameTimer = setTimeout(() => {
            if (nameIndex < 5) {
                setTypedName(name.substring(0, name.length - nameIndex));
                setNameIndex(nameIndex + 1);
            } else {
                setTypingLastName(true);
            }
        }, 105);// Intervalo de tiempo para el nombre (puedes ajustarlo)

        const jobTitleTimer = setTimeout(() => {
            if (jobTitleIndex < jobTitle.length) {
                setTypedJobTitle(jobTitle.substring(0, jobTitleIndex + 1));
                setJobTitleIndex(jobTitleIndex + 1);
            }
        }, 100); // Intervalo de tiempo para el título (puedes ajustarlo)

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(jobTitleTimer);
        };
    }, [nameIndex, jobTitleIndex]);

    useEffect(() => {
        if (typingLastName) {
            const lastNameTimer = setTimeout(() => {
                if (nameIndex2 < lastName.length) {
                    setTypedLastName(lastName.substring(0, nameIndex2 + 1));
                    setNameIndex2(nameIndex2 + 1);
                }
            }, 100); // Intervalo de tiempo para el apellido (puedes ajustarlo)
        }
    }, [nameIndex2, typingLastName]);

    return (
        <div className="colorbg">
            <Container>
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

export default Skills;
