import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздрагивать: PerfectVerb = {
  name: Word('вздрагивать', 4),
  singular1stPerson: Word('вздрагиваю', 4),
  singular2ndPerson: Word('вздрагиваешь', 4),
  singular3rdPerson: Word('вздрагивает', 4),
  plural1stPerson: Word('вздрагиваем', 4),
  plural2ndPerson: Word('вздрагиваете', 4),
  plural3rdPerson: Word('вздрагивают', 4),
  masculinePast: Word('вздрагивал', 4),
  femininePast: Word('вздрагивала', 4),
  neuterPast: Word('вздрагивало', 4),
  pluralPast: Word('вздрагивали', 4),
  imperativeInformal: Word('вздрагивай', 4),
  imperativeFormal: Word('вздрагивайте', 4),
  imperfect: ['вздрогнуть'],
};

perfectVerbs.set(вздрагивать.name.text, вздрагивать);

export { вздрагивать };