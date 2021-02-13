import Router from 'next/router';
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

export default () => {
    const { doRequest } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: () => Router.push('/')
    })

    useEffect(async () => {
        await doRequest()
    }, [])

    return <dev>Signing you out...</dev>
};