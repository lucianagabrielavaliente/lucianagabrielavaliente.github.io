import { useEffect, useState } from 'react';

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration
export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        };
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);
    // Generate stars when the component mounts
    const generateStars = () => {
        const numberOfStars =  Math.floor(
            window.innerWidth * window.innerHeight / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4 pixels
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
                animationDuration: Math.random() * 4 + 2 // Duration between 2 and 6 seconds
            });
        }

        setStars(newStars);
    }

    const generateMeteors = () => {
        const numberOfMeteors = 4

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 4 pixels
                x: Math.random() * 100,
                y: Math.random() * 20, // Start from the top of the screen
                delay: Math.random() * 15, // Random delay for each meteor
                animationDuration: Math.random() * 3 + 3 // Duration between 3 and 6 seconds
            });
        }

        setMeteors(newMeteors);
    }
    return (<div className ="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map(star => (
            <div key={star.id} className="star animate-pulse-subtle" style={{
                width: star.size + 'px',
                height: star.size + 'px',
                left: star.x + '%',
                top: star.y + '%',
                oppacity: star.opacity,
                animationDuration: star.animationDuration + 's',
            }}/>
        ))}
        {meteors.map(meteor => (
            <div key={meteor.id} className="meteor animate-meteor" style={{
                width: meteor.size * 50 + 'px',
                height: meteor.size + 'px',
                left: meteor.x + '%',
                top: meteor.y + '%',
                delay: meteor.delay + 's',
                animationDuration: meteor.animationDuration + 's',
            }}/>
        ))}
    </div>)
}