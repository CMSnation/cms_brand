import React from "react";
import AppLayout from "@/layouts/app-layout";
import { useEffect } from "react";
import NewsSection from "@/components/news/newsCard";
import { Head } from "@inertiajs/react";
import Header from "@/components/general/header/header";
import "./news.scss";

export default function News({ news }: any) {
    // exclude the first item
    const map_news = news.slice(1, news.length);
    return (
        <div id="News_Page">
            <Head title='News' />
            <Header
                page='News'
                title={"Explore Our News"}
                description="Have any question in mind or want to enquire? Please feel free to contact us through the form or the following details."
                contentRight={<>
                    <NewsSection {...news[0]} />
                </>}
            />
            <div id="News_Container">
                {
                    map_news.map((item: any) => {
                        return (
                            <NewsSection {...item} />
                        )
                    })
                }
            </div>
            {/* <NewsSection {...news} /> */}
        </div>
    )
}


News.layout = (page: any) => <AppLayout children={page} />;
