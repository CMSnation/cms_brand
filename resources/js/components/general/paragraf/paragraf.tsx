import React from 'react';
import './paragraf.scss';

type ParagrafProps = {
    title: string;
    titleSize: string;
    children: any;
} & typeof defaultProps;

const defaultProps = {
    title: 'Title',
    titleSize: '100%',
}

export default function Paragraf({ title, titleSize, children }: ParagrafProps) {
    return (
        <div className="paragraf">
            <h1 style={{
                maxWidth: titleSize,
            }}>{title}</h1>
            <p>
                {children}
            </p>
        </div >
    )
}