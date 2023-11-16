import './card.css';
// proj properties
// 0: key, 1: github link, 2: deploymeny/video link, 3: img ref

export default function ProjCard({ proj }) {
    // makes a card with img, github link, and video/deployment link wraped in an li
    return (
        <li className={'background'} style={{
            backgroundImage: `URL(${proj[3]})`
        }}>
            <p>project number {proj[1]}</p>
            

        </li>
    );
}

