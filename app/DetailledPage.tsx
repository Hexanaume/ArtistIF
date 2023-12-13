import Tag from '@/components/Tag';
import Link from '@/components/Link';
import SearchBar from '@/components/SearchBar';
import Lien from '@/components/Lien';
import siteMetadata from '@/data/siteMetadata';
import { formatDate } from 'pliny/utils/formatDate';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import DetailledCard from '@/components/DetailledCard';

const MAX_DISPLAY = 5;

export default function DetailledPage({
    tile,
    author,
    date,
    comment,
    era,
    storage,
    technique,
    price,
}) {
    return (
        <>
            <div>
                <DetailledCard
                    title="hey"
                    imgSrc=""
                    author="jjhgfhj"
                    date=""
                    comment=""
                    era=""
                    storage=""
                    technique=""
                    price=""
                />
            </div>
        </>
    );
}
