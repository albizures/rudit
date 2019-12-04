import { Noun, Gender, PluralNoun } from '../utils/Noun';
import { Word } from '../utils/Word';

const autumns: PluralNoun = {
  nominative: Word('осени', 0),
};

const autumn: Noun = {
  gender: Gender.Feminine,
  nominative: Word('осень', 0),
  accusative: Word('осень', 0),
  pluralForm: autumns,
};

autumns.singularForm = autumn;

export { autumn };
