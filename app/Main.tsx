import React from 'react';
import Tag from '@/components/Tag';
import Link from '@/components/Link';
import SearchBar from '@/components/SearchBar';
import Lien from '@/components/Lien';
import siteMetadata from '@/data/siteMetadata';
import { formatDate } from 'pliny/utils/formatDate';
import NewsletterForm from 'pliny/ui/NewsletterForm';
import ButtonTest from '@/components/ButtonTest';
import DetailledCard from '@/components/DetailledCard';


const MAX_DISPLAY = 5;

const artDetails = {
    title: 'Mona Lisa',
    imgSrc: '/static/images/la_nuit_etoilee.jpg', 
    author: 'Leonardo da Vinci',
    date: 'c. 1503–1506',
    era: 'High Renaissance',
    storage: 'Louvre Museum',
    price: 'Priceless',
    description: 'The Mona Lisa is a famous portrait painting by Leonardo da Vinci.Leonardo di ser Piero da Vinci (15 April 1452 – 2 May 1519) was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect. While his fame initially rested on his achievements as a painter, he also became known for , in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. Leonardo is widely regarded to have been a genius who epitomized the Renaissance humanist ideal, and his collective works comprise a contribution to later generations of artists matched only by that of his younger contemporary, Michelangelo. Born out of wedlock to a successful notary and a lower-class woman in, or near, Vinci, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio. He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan. Later, he worked in Florence and Milan again, as well as briefly in Rome, all while attracting a large following of imitators and students. Upon the invitation of Francis I, he spent his last three years in France, where he died in 1519. Since his death, there has not been a time where his achievements, diverse interests, personal life, and empirical thinking have failed to incite interest and admiration, making him a frequent namesake and subject in culture. Leonardo is identified as one of the greatest painters in the history of art and is often credited as the founder of the High Renaissance. Despite having many lost works and less than 25 attributed major works—including numerous unfinished works—he created some of the most influential paintings in Western art. His magnum opus, the Mona Lisa, is his best known work and often regarded as the worlds most famous painting. The Last Supper is the most reproduced religious painting all time and his Vitruvian Man drawing is also regarded as a cultural icon. In 2017, Salvator Mundi, attributed in whole or part to Leonardo, was sold at auction for US$450.3 million, setting a new record for the most expensive painting ever sold at public auction. Revered for his technological ingenuity, he conceptualized flying machines, a type of armored fighting vehicle, concentrated solar power, a ratio machine that could be used in an adding machine, and the double hull. Relatively few of his designs were constructed or even feasible during his lifetime, as the modern scientific approaches to metallurgy and engineering were only in their infancy during the Renaissance. Some of his smaller inventions, however, entered the world of manufacturing unheralded, such as an automated bobbin winder and a machine for testing the tensile strength of wire. He made substantial discoveries in anatomy, civil engineering, hydrodynamics, geology, optics, and tribology, but he did not publish his findings and they had little to no direct influence on subsequent science.'
};

export default function Home({ posts }) {
    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="flex flex-col items-center justify-center space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Welcome to Artistif
                    </h1>
                    {/* <p>test pour la fiche détaillée</p> */}
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        {siteMetadata.description}
                    </p>
                </div>
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <DetailledCard {...artDetails} />
            </div>
        </>
    );
}
