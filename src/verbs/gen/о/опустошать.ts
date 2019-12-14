import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опустошать: PerfectVerb = {
  name: Word('опустошать', 7),
  singular1stPerson: Word('опустошаю', 7),
  singular2ndPerson: Word('опустошаешь', 7),
  singular3rdPerson: Word('опустошает', 7),
  plural1stPerson: Word('опустошаем', 7),
  plural2ndPerson: Word('опустошаете', 7),
  plural3rdPerson: Word('опустошают', 7),
  masculinePast: Word('опустошал', 7),
  femininePast: Word('опустошала', 7),
  neuterPast: Word('опустошало', 7),
  pluralPast: Word('опустошали', 7),
  imperativeInformal: Word('опустошай', 7),
  imperativeFormal: Word('опустошайте', 7),
  imperfect: [],
};

perfectVerbs.set(опустошать.name.text, опустошать);

export { опустошать };