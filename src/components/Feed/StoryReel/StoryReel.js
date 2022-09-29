import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import pessoa1 from '../../../img/story/1.png';

// images (story)
import story1 from '../../../img/story/storyImage/Imagem 1.jpg'
import story2 from '../../../img/story/storyImage/Imagem 2.jpg'
import story3 from '../../../img/story/storyImage/Imagem 3.jpg'
import story4 from '../../../img/story/storyImage/Imagem 4.jpg'
import story5 from '../../../img/story/storyImage/Imagem 5.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={story1}
                profileSrc={story4}
                title="Pedro Roberto"
            />
            <Story 
                image={story2}
                profileSrc={pessoa1}
                title="David R."
            />
            <Story 
                image={story3}
                profileSrc={story1}
                title="Leticia Alves"
            />
            <Story 
                image={story4}
                profileSrc={story2}
                title="Dog da Sabrina"
            />
            <Story 
                image={story5}
                profileSrc={story1}
                title="Eduardo Oliveira"
            />
        </div>
    )
}

export default StoryReel;
