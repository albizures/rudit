import React from 'react';
import { Word as WordType } from '../utils/Word';

interface PropTypes {
  word: WordType;
}

const getBeforeStress = (word: WordType): string => {
  const { text, stress } = word;
  return text.substr(0, stress);
};

const getAfterStress = (word: WordType): string => {
  const { text, stress } = word;
  return text.substr(stress + 1);
};

const getStress = (word: WordType): string => {
  const { text, stress } = word;
  return text[stress];
};

const Word: React.FC<PropTypes> = (props) => {
  const { word } = props;
  const beforeStress = getBeforeStress(word);
  const stress = getStress(word);
  const afterStress = getAfterStress(word);

  return (
    <>
      {beforeStress}
      <span style={{ color: 'red' }}>{stress}</span>
      {afterStress}
    </>
  );
};

export default Word;
