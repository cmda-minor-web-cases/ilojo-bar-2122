import { client } from '../../config/prismicConfig.js';

let stories = await client.getAllByType('info');

stories = stories.map(story => {
    return {
        "uid": story.uid,
        "title": story.data.title[0].text,
        "text": story.data.text
    }
});
 
stories = stories.sort((a, b) => a.uid - b.uid);

export const renderStory = (req, res) =>{
    let singleStory = stories.filter(story => story.title.split(' ').join('_').toLowerCase() === req.params.title)
    res.render('story', {
        singleStory
    });
}