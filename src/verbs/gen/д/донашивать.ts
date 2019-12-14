import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const донашивать: PerfectVerb = {
  name: Word('донашивать', 3),
  singular1stPerson: Word('донашиваю', 3),
  singular2ndPerson: Word('донашиваешь', 3),
  singular3rdPerson: Word('донашивает', 3),
  plural1stPerson: Word('донашиваем', 3),
  plural2ndPerson: Word('донашиваете', 3),
  plural3rdPerson: Word('донашивают', 3),
  masculinePast: Word('донашивал', 3),
  femininePast: Word('донашивала', 3),
  neuterPast: Word('донашивало', 3),
  pluralPast: Word('донашивали', 3),
  imperativeInformal: Word('донашивай', 3),
  imperativeFormal: Word('донашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(донашивать.name.text, донашивать);

export { донашивать };