'use client';
import DetailledArtist from '@/components/DetailledArtist';
import React from 'react';
import SearchPage from './SearchPage';
import DetailedPageA from 'pages/api/DetailedPageA';

const MAX_DISPLAY = 5;

export default function App() {
    return (
        <>
            <SearchPage />
            <DetailedPageA idPage="Leonard" />
        </>
    );
}
