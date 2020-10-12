import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "Livin' On A Prayer", duration: '4:09' },
        { title: "You're The Best Around", duration: '3:04' },
        { title: 'Eye Of The Tiger', duration: '4:05' },
        { title: 'I Want It That Way', duration: '3:40' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});