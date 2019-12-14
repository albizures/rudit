import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заталкивать: PerfectVerb = {
  name: Word('заталкивать', 3),
  singular1stPerson: Word('заталкиваю', 3),
  singular2ndPerson: Word('заталкиваешь', 3),
  singular3rdPerson: Word('заталкивает', 3),
  plural1stPerson: Word('заталкиваем', 3),
  plural2ndPerson: Word('заталкиваете', 3),
  plural3rdPerson: Word('заталкивают', 3),
  masculinePast: Word('заталкивал', 3),
  femininePast: Word('заталкивала', 3),
  neuterPast: Word('заталкивало', 3),
  pluralPast: Word('заталкивали', 3),
  imperativeInformal: Word('заталкивай', 3),
  imperativeFormal: Word('заталкивайте', 3),
  imperfect: [],
};

perfectVerbs.set(заталкивать.name.text, заталкивать);

export { заталкивать };