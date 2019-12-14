import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрашивать: PerfectVerb = {
  name: Word('накрашивать', 4),
  singular1stPerson: Word('накрашиваю', 4),
  singular2ndPerson: Word('накрашиваешь', 4),
  singular3rdPerson: Word('накрашивает', 4),
  plural1stPerson: Word('накрашиваем', 4),
  plural2ndPerson: Word('накрашиваете', 4),
  plural3rdPerson: Word('накрашивают', 4),
  masculinePast: Word('накрашивал', 4),
  femininePast: Word('накрашивала', 4),
  neuterPast: Word('накрашивало', 4),
  pluralPast: Word('накрашивали', 4),
  imperativeInformal: Word('накрашивай', 4),
  imperativeFormal: Word('накрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(накрашивать.name.text, накрашивать);

export { накрашивать };