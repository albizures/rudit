import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычерчивать: PerfectVerb = {
  name: Word('вычерчивать', 3),
  singular1stPerson: Word('вычерчиваю', 3),
  singular2ndPerson: Word('вычерчиваешь', 3),
  singular3rdPerson: Word('вычерчивает', 3),
  plural1stPerson: Word('вычерчиваем', 3),
  plural2ndPerson: Word('вычерчиваете', 3),
  plural3rdPerson: Word('вычерчивают', 3),
  masculinePast: Word('вычерчивал', 3),
  femininePast: Word('вычерчивала', 3),
  neuterPast: Word('вычерчивало', 3),
  pluralPast: Word('вычерчивали', 3),
  imperativeInformal: Word('вычерчивай', 3),
  imperativeFormal: Word('вычерчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вычерчивать.name.text, вычерчивать);

export { вычерчивать };