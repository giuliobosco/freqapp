import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetching = (fetchAction:any) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAction());
    }, [])
}

export default useFetching;