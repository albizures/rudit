import { Noun, Gender, PluralNoun } from '../utils/Noun';
import { Word } from '../utils/Word';

const summers: PluralNoun = {
  nominative: Word('лета', 1),
};

const summer: Noun = {
  gender: Gender.Neuter,
  nominative: Word('лето', 1),
  accusative: Word('лето', 1),
  pluralForm: summers,
};

summers.singularForm = summer;

export { summer };
