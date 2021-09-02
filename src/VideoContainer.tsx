import React from "react";
import CorePlayer from "@webplayer/coreplayer";

interface Props {}
interface State {
  corePlayer: CorePlayer;
}

const platform = "vod";
const serviceId = "2010";
const videoId = "F873CEE49B41441A988229063192F3B1613E";
const key =
  "V124cc02e9a092412f321994d9e29bba102c3ce2781e75dbae9b9994d9e29bba102c3";

class VideoContainer extends React.Component<Props, State> {
  container: HTMLElement | null = null;

  constructor(props: Props) {
    super(props);

    this.state = {
      corePlayer: new CorePlayer()
    };
  }

  componentDidMount() {
    const { corePlayer } = this.state;

    corePlayer.src = `${platform}://${serviceId}:${key}@${videoId}`;
    corePlayer.controls = true;
    this.setState({
      corePlayer
    });
  }

  render() {
    const { corePlayer } = this.state;

    if (!corePlayer) return null;

    if (this.container) {
      this.container.insertBefore(
        corePlayer.shadowRoot,
        this.container.firstChild
      );
    }

    return (
      <div
        id="video-container"
        ref={ref => {
          this.container = ref;
        }}
      ></div>
    );
  }
}

export default VideoContainer;
