import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опоражнивать: PerfectVerb = {
  name: Word('опоражнивать', 4),
  singular1stPerson: Word('опоражниваю', 4),
  singular2ndPerson: Word('опоражниваешь', 4),
  singular3rdPerson: Word('опоражнивает', 4),
  plural1stPerson: Word('опоражниваем', 4),
  plural2ndPerson: Word('опоражниваете', 4),
  plural3rdPerson: Word('опоражнивают', 4),
  masculinePast: Word('опоражнивал', 4),
  femininePast: Word('опоражнивала', 4),
  neuterPast: Word('опоражнивало', 4),
  pluralPast: Word('опоражнивали', 4),
  imperativeInformal: Word('опоражнивай', 4),
  imperativeFormal: Word('опоражнивайте', 4),
  imperfect: [],
};

perfectVerbs.set(опоражнивать.name.text, опоражнивать);

export { опоражнивать };