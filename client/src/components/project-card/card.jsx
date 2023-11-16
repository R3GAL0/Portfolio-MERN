import './card.css';
// proj properties
// 0: key, 1: github link, 2: deploymeny/video link, 3: img ref, 4: title

export default function ProjCard({ proj }) {
    // makes a card with img, github link, and video/deployment link wraped in an li
    return (
        <li className={'background '} style={{
            backgroundImage: `URL(${proj[3]})`
        }}>
            <div className='infoCard'>
                <p>{proj[4]}</p>
                <a href={proj[2]}>Demo</a> <br />
                <a href={proj[1]}>Github</a>
            </div>


        </li>
    );
}

