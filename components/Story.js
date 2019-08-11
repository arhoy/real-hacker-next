import React from 'react';
import Link from 'next/link';


const Story = ({stories}) => {
    if(!stories.length > 0) return <div> No story available </div>

    return (
        <div className="story_list">
        {stories.map(story => (
          <div className="story" key={story.id}>
            <h2 className="story_title">
              <a href={story.url}>{story.title}</a>
            </h2>
            <div className="story_details">
              <span>{story.points || 0} points</span>
              <Link href={`/story?id=${story.id}`}>
                <a>{story.comments_count || 0} comments</a>
              </Link>
            </div>
          </div>
        ))}

        <style jsx>{`
                .story_list {
                padding: 0 1em;
            }
            .story {
                padding: 1em 0;
            }
            .story_title {
                font-size: 1rem;
                font-weight: 400;
                margin: 0;
                margin-bottom: 0.5em;
            }
            .story_title a {
                color: #333;
                text-decoration: none;
            }
            .story_title a:hover,
            .story_details a:hover {
                text-decoration: underline;
            }
            .story_details {
                font-size: 0.8rem;
                font-weight: bold;
            }
            .story_details span {
                margin-right: 1em;
            }
            .story_details a {
                color: #6600ff;
                text-decoration: none;
            }
            `}</style>
        </div>
    );
};

export default Story;