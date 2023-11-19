import React from 'react';
import Container from 'react-bootstrap/Container';
import { FaMoon } from 'react-icons/fa';

const HeaderLight = ({ toggleDarkMode }) => {
    return (
        <div className="colorbg1">
            <Container className="space-container text-end">
                <button className='p-2 m-2'
                    name='dark'
                    aria-label="dark"
                    style={{
                        backgroundColor: '#1b2735',
                        border: '1px solid #1b2735',
                        borderRadius: '50%', // Establece el borde circular
                        padding: '10px', // Ajusta el relleno según sea necesario
                        outline: 'none', // Elimina el contorno predeterminado
                        cursor: 'pointer', // Cambia el cursor al pasar por encima
                        color: 'white'
                    }}
                    onClick={toggleDarkMode}>
                    <FaMoon />
                </button>
            </Container>
        </div>
    );
}

export default HeaderLight;
