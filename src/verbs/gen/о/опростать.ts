import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опростать: PerfectVerb = {
  name: Word('опростать', 6),
  singular1stPerson: Word('опростаю', 6),
  singular2ndPerson: Word('опростаешь', 6),
  singular3rdPerson: Word('опростает', 6),
  plural1stPerson: Word('опростаем', 6),
  plural2ndPerson: Word('опростаете', 6),
  plural3rdPerson: Word('опростают', 6),
  masculinePast: Word('опростал', 6),
  femininePast: Word('опростала', 6),
  neuterPast: Word('опростало', 6),
  pluralPast: Word('опростали', 6),
  imperativeInformal: Word('опростай', 6),
  imperativeFormal: Word('опростайте', 6),
  imperfect: [],
};

perfectVerbs.set(опростать.name.text, опростать);

export { опростать };