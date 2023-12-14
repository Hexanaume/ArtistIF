import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

const ImageWithFallback = ({ src, fallback, ...props }) => {
    const [state, setState] = useState('loading');
    useEffect(() => {
        const img = new Image();
        img.onload = () => setState('success');
        img.onerror = () => setState('error');
        img.src = src;
    }, []);

    return (
        <>
            {state === 'loading' && <CircleLoader />}
            {state === 'error' && fallback}
            {state === 'success' && <img src={src} {...props} />}
        </>
    );
};

export default ImageWithFallback;
