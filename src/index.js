import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        image: '/images/homem-barbado.jpg',
        name: 'Diego Schell Fernandes',
        time: 'Há 3 min',
        post:
          'Nullam tristique libero eget elit tempor, non sollicitudin sapien convallis. Fusce ullamcorper, sapien vitae fermentum rutrum, leo enim tempus ligula, nec posuere erat risus sed ligula. Praesent dapibus dignissim ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque nec sollicitudin nisl. Aenean quis pellentesque nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus laoreet pretium scelerisque. Nunc sodales lorem semper auctor finibus. Praesent et sapien elementum magna elementum rutrum vitae eget purus. Sed sollicitudin elit quis enim bibendum tristique. Nunc accumsan, enim id faucibus varius, elit ex pulvinar tortor, vitae scelerisque nibh leo vitae justo.',
      },

      {
        image: '/images/mulher-rosto-sorridente.jpg',
        name: 'Rubia Savolksi',
        time: 'Há 10 min',
        post:
          'Quisque laoreet, dolor ut tempus commodo, libero urna congue justo, id pulvinar lectus nisl a erat. Nam vestibulum risus vitae justo ornare, a rutrum quam fringilla. Quisque magna tortor, dignissim eu placerat id, commodo sit amet ante. Etiam tincidunt risus justo, eu placerat orci laoreet quis.',
      },
      {
        image: '/images/jovem-escritorio.jpg',
        name: 'Mr Mustache',
        time: 'Há 20 min',
        post:
          'Sed imperdiet fringilla nunc eget sagittis. Phasellus sed quam eu nibh convallis dignissim et ac dui. Suspendisse dignissim libero et imperdiet ullamcorper. Sed non tortor a massa congue mollis nec eu metus. Etiam et lacus elit. Duis mattis dui lectus, nec eleifend lacus hendrerit sit amet. Morbi et faucibus ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
      },
    ],
  }

  render() {
    return (
      <>
        <Header />
        {this.state.posts.map((post) => (
          <Post post={post} key={post.name} />
        ))}
      </>
    );
  }
}

render(<App />, document.getElementById('app'));
