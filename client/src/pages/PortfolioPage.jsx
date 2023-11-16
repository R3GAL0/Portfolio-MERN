import ProjCard from "../components/project-card/card";
// importing an array of projects to be displayed
import projs from '../projectList'

export default function PortfolioPage() {
    // an array of my projects
    // array is mapped later to display the project cards
    // index
    // 0: key, 1: github link, 2: deploymeny/video link, 3: img ref
    return (

        <div className="container">
            <h1>Portfolio</h1>
            {/* loop over projs to get a tile for each */}
            <ul className={'row flex-row d-flex'} style={{'listStyle': 'none'}}>
                {projs.map((proj) => <ProjCard key={proj[0]} proj={proj}/>)}       
            </ul>
        </div>

    );
} 