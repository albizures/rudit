import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опахивать: PerfectVerb = {
  name: Word('опахивать', 2),
  singular1stPerson: Word('опахиваю', 2),
  singular2ndPerson: Word('опахиваешь', 2),
  singular3rdPerson: Word('опахивает', 2),
  plural1stPerson: Word('опахиваем', 2),
  plural2ndPerson: Word('опахиваете', 2),
  plural3rdPerson: Word('опахивают', 2),
  masculinePast: Word('опахивал', 2),
  femininePast: Word('опахивала', 2),
  neuterPast: Word('опахивало', 2),
  pluralPast: Word('опахивали', 2),
  imperativeInformal: Word('опахивай', 2),
  imperativeFormal: Word('опахивайте', 2),
  imperfect: [],
};

perfectVerbs.set(опахивать.name.text, опахивать);

export { опахивать };