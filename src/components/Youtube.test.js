import React from 'react';
import { render, screen } from '@testing-library/react';
import Youtube from './Youtube'; 
import '@testing-library/jest-dom/extend-expect';


describe('Youtube component', () => {
  it('renders "No exercise detail available." message when exerciseDetail is not provided', () => {
    render(<Youtube exerciseDetail={null} />);
    expect(screen.getByText('No exercise detail available.')).toBeInTheDocument();
  });

  it('renders exercise name followed by "videos" when exerciseDetail is provided', () => {
    const exerciseDetail = { name: 'Test Exercise' };
    const youtubeDetail = [{ video: { videoId: 'abc123', thumbnails: [{ url: 'thumbnail_url' }], title: 'Test Video', channelName: 'Test Channel' } }];
    render(<Youtube exerciseDetail={exerciseDetail} youtubeDetail={youtubeDetail} />);
    expect(screen.getByText('Test Exercise videos')).toBeInTheDocument();
  });

  it('renders video thumbnails and titles when youtubeDetail is provided', () => {
    const exerciseDetail = { name: 'Test Exercise' };
    const youtubeDetail = [{ video: { videoId: 'abc123', thumbnails: [{ url: 'thumbnail_url' }], title: 'Test Video', channelName: 'Test Channel' } }];
    render(<Youtube exerciseDetail={exerciseDetail} youtubeDetail={youtubeDetail} />);
    expect(screen.getByAltText('Test Video')).toBeInTheDocument();
    expect(screen.getByText('Test Video')).toBeInTheDocument();
  });

  it('limits the number of displayed videos to 6', () => {
    const exerciseDetail = { name: 'Test Exercise' };
    const youtubeDetail = [
      { video: { videoId: '1', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 1', channelName: 'Channel 1' } },
      { video: { videoId: '2', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 2', channelName: 'Channel 2' } },
      { video: { videoId: '3', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 3', channelName: 'Channel 3' } },
      { video: { videoId: '4', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 4', channelName: 'Channel 4' } },
      { video: { videoId: '5', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 5', channelName: 'Channel 5' } },
      { video: { videoId: '6', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 6', channelName: 'Channel 6' } },
      { video: { videoId: '7', thumbnails: [{ url: 'thumbnail_url' }], title: 'Video 7', channelName: 'Channel 7' } },
    ];
    render(<Youtube exerciseDetail={exerciseDetail} youtubeDetail={youtubeDetail} />);
    const videoThumbnails = screen.getAllByAltText(/^Video \d$/);
    expect(videoThumbnails.length).toBe(6);
  });
});
