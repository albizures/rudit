import React from 'react';
import verbList from '../verbs/array';
import pronounList from '../pronouns/array';
import { getRandomElement } from '../utils/array';
import Word from '../components/Word';
import { verbConjugations } from '../utils/Verb';

const Index: React.FC = () => {
  const [pronouns, setPronouns] = React.useState([pronounList[0]]);
  const [verb, setVerb] = React.useState(verbList[0]);
  const [verbConjugation, setVerbConjugation] = React.useState(verbConjugations[0]);
  const onScramble = () => {
    setVerb(getRandomElement(verbList));
    setVerbConjugation(getRandomElement(verbConjugations));

    setPronouns(pronouns.map(() => getRandomElement(pronounList)));
  };

  const onRemovePronoun = () => {
    setPronouns(pronouns.slice(0, pronouns.length - 1));
  };

  const onAddPronoun = () => {
    setPronouns(pronouns.concat(getRandomElement(pronounList)));
  };

  return (
    <div>
      <h2>
        <Word word={verb[verbConjugation]} />
      </h2>

      <ul>
        {pronouns.map((pronoun, index) => {
          return (
            <li key={index}>
              <Word word={pronoun.nominative} />
            </li>
          );
        })}
      </ul>

      <p>{verbConjugation}</p>
      <button onClick={onAddPronoun}>add pronoun</button>
      <button onClick={onRemovePronoun}>remove pronoun</button>
      <button onClick={onScramble}>Scramble</button>
    </div>
  );
};

export default Index;
