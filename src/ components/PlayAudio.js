import React from 'react';

const PlayAudio = React.forwardRef((props, ref) => (
    <audio autoPlay preload="true" data-seq={props.seqState} onEnded={() => props.onEnded(props) } src={`${process.env.PUBLIC_URL}/assets/audio${props.src}`} ref={ref} type="audio/ogg"></audio>
));

export default PlayAudio;