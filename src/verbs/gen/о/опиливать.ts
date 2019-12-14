import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опиливать: PerfectVerb = {
  name: Word('опиливать', 2),
  singular1stPerson: Word('опиливаю', 2),
  singular2ndPerson: Word('опиливаешь', 2),
  singular3rdPerson: Word('опиливает', 2),
  plural1stPerson: Word('опиливаем', 2),
  plural2ndPerson: Word('опиливаете', 2),
  plural3rdPerson: Word('опиливают', 2),
  masculinePast: Word('опиливал', 2),
  femininePast: Word('опиливала', 2),
  neuterPast: Word('опиливало', 2),
  pluralPast: Word('опиливали', 2),
  imperativeInformal: Word('опиливай', 2),
  imperativeFormal: Word('опиливайте', 2),
  imperfect: [],
};

perfectVerbs.set(опиливать.name.text, опиливать);

export { опиливать };