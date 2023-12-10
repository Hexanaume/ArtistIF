import Tag from "@/components/Tag";
import Link from "@/components/Link";
import SearchBar from "@/components/SearchBar";
import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";
import NewsletterForm from "pliny/ui/NewsletterForm";

const MAX_DISPLAY = 5;

export default function Home({ posts }) {
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="flex flex-col items-center justify-center space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Welcome to Artistif
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {siteMetadata.description}
                    </p>
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
        </>
    );
}
