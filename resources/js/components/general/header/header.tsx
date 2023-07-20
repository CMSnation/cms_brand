import { ReactNode } from 'react';
import "./header.scss"

export default function Header({ page, title, description, contentLeft, contentRight }: { page: string, title: string; description?: string, contentLeft?: ReactNode, contentRight?: ReactNode }) {
    return (
        <div id='Header'>
            <div id='left'>
                <div id='title'>
                    <div>
                    </div>
                    <span id='title_content'>{page}</span>
                </div>
                <div id='content'>
                    <span id='description'>
                        {title}
                    </span>
                    <span id='support_description'>
                        {description}
                    </span>
                    {contentLeft}
                </div>
            </div>
            <div id='right'>
                {contentRight}
            </div>
        </div>
    );
}

