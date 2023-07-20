// ivan - 20 Juli 2023
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import AppLayout from '@/layouts/app-layout';
import Header from '@/components/general/header/header';
import Container from '@/components/container';

// passed parameter from app\Http\Controllers\AboutController.php
export default function About({ title, content, video }: { title: string, content: string, video: string }) {
    useEffect(() => {
        console.log(video);
    }, [])
    return (
        <>
            <Head>
                <title>
                    {title}
                </title>
                <meta name="description" content={content} />
            </Head>
            <Header
                page='Know About Us'
                title={title}
                description={content}
                contentRight={<>

                </>}
            />
            <Container>
                <iframe width="420" height="315"
                    src={video}>
                </iframe>
            </Container>
        </>
    );
}

About.layout = (page: React.ReactNode) => <AppLayout children={page} />;
