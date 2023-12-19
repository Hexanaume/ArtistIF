'use client';
import React from 'react';
import SearchPage from './searchPage';
import { UrlProvider } from '@/components/UrlContext';

const MAX_DISPLAY = 5;

export default function App() {
    return (
        <>
            <UrlProvider>
                <SearchPage />
            </UrlProvider>
        </>
    );
}
