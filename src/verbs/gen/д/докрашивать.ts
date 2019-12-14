import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докрашивать: PerfectVerb = {
  name: Word('докрашивать', 4),
  singular1stPerson: Word('докрашиваю', 4),
  singular2ndPerson: Word('докрашиваешь', 4),
  singular3rdPerson: Word('докрашивает', 4),
  plural1stPerson: Word('докрашиваем', 4),
  plural2ndPerson: Word('докрашиваете', 4),
  plural3rdPerson: Word('докрашивают', 4),
  masculinePast: Word('докрашивал', 4),
  femininePast: Word('докрашивала', 4),
  neuterPast: Word('докрашивало', 4),
  pluralPast: Word('докрашивали', 4),
  imperativeInformal: Word('докрашивай', 4),
  imperativeFormal: Word('докрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(докрашивать.name.text, докрашивать);

export { докрашивать };