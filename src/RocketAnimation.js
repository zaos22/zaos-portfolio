import React, { useState, useEffect } from 'react';

const RocketAnimation = ({ isLoading }) => {
    const [showAnimation, setShowAnimation] = useState(isLoading);

    useEffect(() => {
        // Muestra la animación al principio
        setShowAnimation(isLoading);

        // Lógica de la animación aquí (por ejemplo, usando setTimeout)
        const animationTimeout = setTimeout(() => {
            // Oculta la animación cuando la carga está completa
            setShowAnimation(false);
        }, 2000);

        // Limpieza cuando se desmonta el componente o cuando isLoading cambia
        return () => clearTimeout(animationTimeout);
    }, [isLoading]);

    return (
        <div className='app-container'>
            {showAnimation && (
                <div className="rocket-animation">
                    🚀 loading...
                </div>
            )}
        </div>
    );
}

export default RocketAnimation;
