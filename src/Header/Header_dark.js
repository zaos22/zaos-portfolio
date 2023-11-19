import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaSun } from 'react-icons/fa';


const HeaderDark = ({ toggleDarkMode }) => {
    return (
        <div className="space">
            <Container className="space-container text-end">
                <div className="chaos" />
                <button className='p-2 m-2'
                    name='light'
                    aria-label="light"
                    style={{
                        backgroundColor: '#ffeada',
                        border: '1px solid #ffeada',
                        borderRadius: '50%', // Establece el borde circular
                        padding: '10px', // Ajusta el relleno según sea necesario
                        outline: 'none', // Elimina el contorno predeterminado
                        cursor: 'pointer', // Cambia el cursor al pasar por encima
                    }}
                    onClick={toggleDarkMode}>
                    <FaSun />
                </button>
            </Container>
        </div>
    );
}

export default HeaderDark;
