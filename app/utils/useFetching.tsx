import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useFetching = fetchAction => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAction());
    }, [])
}

export default useFetching;