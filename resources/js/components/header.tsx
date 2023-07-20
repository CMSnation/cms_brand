import { ReactNode } from 'react';

export default function Header({ title, description }: { title: string; description: ReactNode }) {
    return (
        <div id='HeaderContainer'>
            <div>
                <div />{title}
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}

