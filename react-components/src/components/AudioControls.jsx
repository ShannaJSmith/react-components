import './AudioControls.scss';

import { BsSkipBackward, BsSkipForward, BsPlay, BsPause } from 'react-icons/bs';

const AudioControls = ({
  playing,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <BsSkipBackward />
      </button>
      {playing ? (
        <button
          type="button"
          className="pause"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <BsPause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <BsPlay />
        </button>
      )}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
      >
        <BsSkipForward />
      </button>
    </div>
  );
};

export default AudioControls;
