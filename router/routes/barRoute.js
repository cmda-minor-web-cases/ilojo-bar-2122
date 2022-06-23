import { client } from '../../config/prismicConfig.js';

let stories = await client.getAllByType('info');

stories = stories.map(story => {
    return {
        "uid": story.uid,
        "title": story.data.title[0].text,
        "img": story.data.image1.url
    }
});
 
stories = stories.sort((a, b) => a.uid - b.uid);

export const renderBar = (req, res) =>{
    res.render('bar', {
        stories
    });
}