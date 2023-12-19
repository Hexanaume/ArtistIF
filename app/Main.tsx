'use client';
import DetailledArtist from '@/components/DetailledArtist';
import React from 'react';
import SearchPage from './SearchPage';
import DetailedPage from 'pages/api/DetailedPage';

const MAX_DISPLAY = 5;

export default function App() {
    return (
        <>
            <SearchPage />
            <DetailedPage SearchTerm="Leonard" />
        </>
    );
}
