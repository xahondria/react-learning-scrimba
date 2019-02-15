import React from "react";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.getRandomImg = this.getRandomImg.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data;
        this.setState({allMemeImgs: memes})
      })
  }

  handleChange(evt) {
    const {name, value} = evt.target;

    this.setState({
      [name]: [value]
    });
  }

  getRandomImg() {
    const randomNumber = Math.floor(Math.random()*this.state.allMemeImgs.length);
    this.setState({randomImg: this.state.allMemeImgs[randomNumber].url})
  }

  render() {
    return (
      <div>
        <form className="meme-form">
          <input
            type="text"
            name='topText'
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name='bottomText'
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button type='button' onClick={this.getRandomImg}>Gen</button>
        </form>

        <div className="meme">
          <img src={this.state.randomImg} alt=""/>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;