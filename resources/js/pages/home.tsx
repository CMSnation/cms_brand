import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import ApplicationLogo from '@/components/application-logo';
import Header from '@/components/header';
import Container from '@/components/container';
import { cn } from '@/lib/utils';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import HeroSection from '@/components/home/heroSection';
import AboutSection from '@/components/home/aboutSection';
import PartnershipSection from '@/components/home/partnership';
import ProductsSection from '@/components/home/produtsSection';
import { useEffect } from 'react';

export default function Home({ web_name, web_description, web_product }: any) {
    useEffect(() => {
        console.log(web_product);
    }, [])
    return (
        <>
            {/* <Head>
                <title>Home | {web_name}</title>
                <meta name='description' content={web_description} />
            </Head> */}
            <Head>
                <title>{web_name}</title>
                <meta name="description" content={web_description} />
            </Head>
            {/* <Header
                title='Panti Asuhan Keren'
                description='Inertia is a new approach to building classic server-driven web apps. We call it the modern monolith.'
            /> */}
            {/* <Container> */}
            <HeroSection title={web_name} description={web_description} />
            <AboutSection />
            <PartnershipSection />
            <ProductsSection products={web_product}/>
        </>
    );
}


Home.layout = (page: any) => <AppLayout children={page} />;
