import { useEffect } from 'react';

const useDisableBodyScroll = (hide: boolean): void => {
    useEffect(() => {
        if (hide) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [hide]);
};

export default useDisableBodyScroll;
