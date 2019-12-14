import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докашивать: PerfectVerb = {
  name: Word('докашивать', 3),
  singular1stPerson: Word('докашиваю', 3),
  singular2ndPerson: Word('докашиваешь', 3),
  singular3rdPerson: Word('докашивает', 3),
  plural1stPerson: Word('докашиваем', 3),
  plural2ndPerson: Word('докашиваете', 3),
  plural3rdPerson: Word('докашивают', 3),
  masculinePast: Word('докашивал', 3),
  femininePast: Word('докашивала', 3),
  neuterPast: Word('докашивало', 3),
  pluralPast: Word('докашивали', 3),
  imperativeInformal: Word('докашивай', 3),
  imperativeFormal: Word('докашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(докашивать.name.text, докашивать);

export { докашивать };