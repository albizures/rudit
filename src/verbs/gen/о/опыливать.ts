import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опыливать: PerfectVerb = {
  name: Word('опыливать', 2),
  singular1stPerson: Word('опыливаю', 2),
  singular2ndPerson: Word('опыливаешь', 2),
  singular3rdPerson: Word('опыливает', 2),
  plural1stPerson: Word('опыливаем', 2),
  plural2ndPerson: Word('опыливаете', 2),
  plural3rdPerson: Word('опыливают', 2),
  masculinePast: Word('опыливал', 2),
  femininePast: Word('опыливала', 2),
  neuterPast: Word('опыливало', 2),
  pluralPast: Word('опыливали', 2),
  imperativeInformal: Word('опыливай', 2),
  imperativeFormal: Word('опыливайте', 2),
  imperfect: [],
};

perfectVerbs.set(опыливать.name.text, опыливать);

export { опыливать };