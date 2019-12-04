import { Noun, PluralNoun, Gender } from '../utils/Noun';
import { Word } from '../utils/Word';

const pluralWater: PluralNoun = {
  nominative: Word('воды', 3),
};

const water: Noun = {
  gender: Gender.Feminine,
  nominative: Word('вода', 3),
  accusative: Word('воду', 1),
  pluralForm: pluralWater,
};

pluralWater.singularForm = water;

export { water };
