import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опрашивать: PerfectVerb = {
  name: Word('опрашивать', 3),
  singular1stPerson: Word('опрашиваю', 3),
  singular2ndPerson: Word('опрашиваешь', 3),
  singular3rdPerson: Word('опрашивает', 3),
  plural1stPerson: Word('опрашиваем', 3),
  plural2ndPerson: Word('опрашиваете', 3),
  plural3rdPerson: Word('опрашивают', 3),
  masculinePast: Word('опрашивал', 3),
  femininePast: Word('опрашивала', 3),
  neuterPast: Word('опрашивало', 3),
  pluralPast: Word('опрашивали', 3),
  imperativeInformal: Word('опрашивай', 3),
  imperativeFormal: Word('опрашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(опрашивать.name.text, опрашивать);

export { опрашивать };