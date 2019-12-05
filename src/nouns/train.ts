import { Noun, Gender, PluralNoun } from '../utils/Noun';
import { Word } from '../utils/Word';

const plural: PluralNoun = {
  nominative: Word('поезда', 5),
  genitive: Word('поездов', 5),
  dative: Word('поездам', 5),
  accusative: Word('поезда', 5),
  instrumental: Word('поездами', 5),
  prepositional: Word('поездах', 5),
};

const поезд: Noun = {
  gender: Gender.Masculine,
  nominative: Word('поезда', 5),
  genitive: Word('поезда', 1),
  dative: Word('поезду', 1),
  accusative: Word('поезд', 1),
  instrumental: Word('поездом', 1),
  prepositional: Word('поезде', 1),
  pluralForm: plural,
};

plural.singularForm = поезд;

export { поезд };
