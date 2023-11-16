import ProjCard from "../components/project-card/card";

export default function PortfolioPage() {
    // an array of my projects
    // array is mapped later to display the project cards
    // index
    // 0: key, 1: github link, 2: deploymeny/video link, 3: img ref
    let projs = [ 
        ['p1', 'github1', 'deployment1', 'img1'],
        ['p2', 'github2', 'deployment2', 'img2'],
        ['p3', 'github3', 'deployment3', 'img3']
]
    return (

        <div>
            <h1>Portfolio</h1>
            {/* loop over projs to get a tile for each */}
            <ul style={{'listStyle': 'none'}}>
                {projs.map((proj) => <ProjCard key={proj[0]} proj={proj}/>)}       
            </ul>
        </div>

    );
} 