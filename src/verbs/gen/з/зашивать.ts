import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашивать: PerfectVerb = {
  name: Word('зашивать', 5),
  singular1stPerson: Word('зашиваю', 5),
  singular2ndPerson: Word('зашиваешь', 5),
  singular3rdPerson: Word('зашивает', 5),
  plural1stPerson: Word('зашиваем', 5),
  plural2ndPerson: Word('зашиваете', 5),
  plural3rdPerson: Word('зашивают', 5),
  masculinePast: Word('зашивал', 5),
  femininePast: Word('зашивала', 5),
  neuterPast: Word('зашивало', 5),
  pluralPast: Word('зашивали', 5),
  imperativeInformal: Word('зашивай', 5),
  imperativeFormal: Word('зашивайте', 5),
  imperfect: [],
};

perfectVerbs.set(зашивать.name.text, зашивать);

export { зашивать };