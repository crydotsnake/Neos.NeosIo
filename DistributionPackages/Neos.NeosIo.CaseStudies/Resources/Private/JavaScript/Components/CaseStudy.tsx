import {h} from 'preact';
import * as React from "preact/compat";

const projectVolumesValueMap = {
    1: 'n/a',
    5: '< 100 h',
    10: '100 - 499h',
    15: '500 - 999h',
    20: '1000 - 3000h',
    25: '> 3000h'
};

export default function CaseStudy({caseStudy}: {caseStudy: CaseStudy}) {
    return (
        <div key={caseStudy.identifier} className="cases__grid-row">
            <div className="cases__grid-cell">
                {caseStudy.image
                    ?
                    <img src="/_Resources/Static/Packages/Neos.NeosIo/Images/Loader.svg" data-image-normal={caseStudy.image} class="imageTeaser__image" loading="lazy" title={caseStudy.title} alt={caseStudy.title} />
                    : ''
                }

            </div>
            <div className="cases__grid-cell cases__overlay">
                <p>
                    <strong><a href={caseStudy.url} title={caseStudy.title} target="_blank" rel="noopener">
                        {caseStudy.title}
                    </a></strong>
                </p>
            </div>
            <div className="cases__grid-cell cases__overlay">
                <p>
                    <i class="fas fa-industry"></i> {caseStudy.projectType}
                </p>
            </div>
            <div className="cases__grid-cell cases__overlay">
                <p>
                    <i class="fas fa-users"></i> {projectVolumesValueMap[caseStudy.projectVolume]}
                </p>
            </div>
        </div>

    )
}
