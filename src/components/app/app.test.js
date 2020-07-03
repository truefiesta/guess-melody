import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/3/38/Stalker-Last_Laugh.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/44/Blues_en_F_-_tempo_60_%C3%A0_120.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/2/21/03_Turning_Points.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/2/2f/Dr_House.ogg`,
      genre: `rock`,
    }],
  },
  {
    type: `artist`,
    song: {
      artist: `Lorde`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `https://api.adorable.io/avatars/128/1`,
      artist: `Пелагея`,
    }, {
      picture: `https://api.adorable.io/avatars/128/2`,
      artist: `Краснознаменная дивизия имени моей бабушки`,
    }, {
      picture: `https://api.adorable.io/avatars/128/3`,
      artist: `Lorde`,
    }],
  }
];

describe(`Render App`, () => {
  it(`Render WelcomeScreen`, () => {
    const tree = renderer.create(
        <App
          errorsCount={3}
          questions={questions}
          onUserAnswer={() => null}
          onWelcomeButtonClick={() => null}
          step={-1}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render GenreQuestionScreen`, () => {
    const tree = renderer.create(
        <App
          errorsCount={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={0}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render ArtistQuestionScreen`, () => {
    const tree = renderer.create(
        <App
          errorsCount={3}
          questions={questions}
          onUserAnswer={() => {}}
          onWelcomeButtonClick={() => {}}
          step={1}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
