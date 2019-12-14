import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опаливать: PerfectVerb = {
  name: Word('опаливать', 2),
  singular1stPerson: Word('опаливаю', 2),
  singular2ndPerson: Word('опаливаешь', 2),
  singular3rdPerson: Word('опаливает', 2),
  plural1stPerson: Word('опаливаем', 2),
  plural2ndPerson: Word('опаливаете', 2),
  plural3rdPerson: Word('опаливают', 2),
  masculinePast: Word('опаливал', 2),
  femininePast: Word('опаливала', 2),
  neuterPast: Word('опаливало', 2),
  pluralPast: Word('опаливали', 2),
  imperativeInformal: Word('опаливай', 2),
  imperativeFormal: Word('опаливайте', 2),
  imperfect: [],
};

perfectVerbs.set(опаливать.name.text, опаливать);

export { опаливать };