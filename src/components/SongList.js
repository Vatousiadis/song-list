import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((songs) => {
            return (
                <div className="item" key={songs.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(songs)}>
                            SELECT
                        </button>
                    </div>
                    <div className="content">{songs.title}</div>
                </div>
            );
        });
    }

    render() {

        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {

    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);
