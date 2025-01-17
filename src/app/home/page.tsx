'use client';

import React from 'react';
import {Alert, AlertIcon, Box, Button, Heading, Spinner, Text} from '@chakra-ui/react';
import {useAppDispatch, useAppSelector} from "@/redux/hook";
import {useRouter} from "next/navigation";
import {logout} from "@/redux/features/authSlice";
import {persistor} from "@/redux/store";
const Page = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {user, loading, error, isAuthenticated } = useAppSelector((state) => state.auth);

    const handleLogout = async () => {
        dispatch(logout());
        await persistor.flush();
        await persistor.purge();
        router.push('/login');
    }

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Spinner size="xl" />
            </Box>
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Alert status="error">
                    <AlertIcon />
                    {error}
                </Alert>
            </Box>
        );
    }

    if (!isAuthenticated) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <Heading as="h1" size="lg">
                    You are not logged in :(
                </Heading>
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
            p={4}
        >
            <Heading as="h1" size="lg" mb={4}>
                Home page !
            </Heading>
            <Text fontSize="md">Connected ! Welcome {user.username} </Text>
            <Button colorScheme="red" onClick={handleLogout} size="md" p={4} mt={4}>Logout</Button>
        </Box>
    );
};

export default Page;
