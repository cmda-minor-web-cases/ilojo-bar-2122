import { client } from '../../config/prismicConfig.js';

let stories = await client.getAllByType('info');

stories = stories.map(story => {
    return {
        "uid": story.uid,
        "title": story.data.title[0].text,
        "text": story.data.text,
        "images": [story.data.image1, story.data.image2, story.data.image3, story.data.image4, story.data.image5, story.data.image6, story.data.image7]
    }
});
 
stories = stories.sort((a, b) => a.uid - b.uid);

export const renderStory = (req, res) =>{
    let singleStory = stories.find(story => story.title.split(' ').join('_').toLowerCase() === req.params.title);
    res.render('story', {
        singleStory
    });
}