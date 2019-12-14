import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затрагивать: PerfectVerb = {
  name: Word('затрагивать', 4),
  singular1stPerson: Word('затрагиваю', 4),
  singular2ndPerson: Word('затрагиваешь', 4),
  singular3rdPerson: Word('затрагивает', 4),
  plural1stPerson: Word('затрагиваем', 4),
  plural2ndPerson: Word('затрагиваете', 4),
  plural3rdPerson: Word('затрагивают', 4),
  masculinePast: Word('затрагивал', 4),
  femininePast: Word('затрагивала', 4),
  neuterPast: Word('затрагивало', 4),
  pluralPast: Word('затрагивали', 4),
  imperativeInformal: Word('затрагивай', 4),
  imperativeFormal: Word('затрагивайте', 4),
  imperfect: [],
};

perfectVerbs.set(затрагивать.name.text, затрагивать);

export { затрагивать };