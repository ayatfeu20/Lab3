import React from "react";

const Youtube = ({ youtubeDetail, exerciseDetail }) => {
  if (!exerciseDetail) {
    return <p>No exercise detail available.</p>;
  }

  return (
    <div>
      <p style={{ textTransform: 'capitalize', fontSize: '25px', textAlign: 'center' }}>
        <span style={{ color: '#8358FF', fontSize: '25px', marginBottom: '15px' }}>
          {exerciseDetail.name}
        </span> videos
      </p>
      <div className="exercise-videos">
        {youtubeDetail?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="exercise-video"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div>
              <p>{item.video.title}</p>
              <p style={{ color: '#4F4C4C', marginTop: '10px' }}>{item.video.channelName}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Youtube;
