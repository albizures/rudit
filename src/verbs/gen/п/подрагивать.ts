import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрагивать: PerfectVerb = {
  name: Word('подрагивать', 4),
  singular1stPerson: Word('подрагиваю', 4),
  singular2ndPerson: Word('подрагиваешь', 4),
  singular3rdPerson: Word('подрагивает', 4),
  plural1stPerson: Word('подрагиваем', 4),
  plural2ndPerson: Word('подрагиваете', 4),
  plural3rdPerson: Word('подрагивают', 4),
  masculinePast: Word('подрагивал', 4),
  femininePast: Word('подрагивала', 4),
  neuterPast: Word('подрагивало', 4),
  pluralPast: Word('подрагивали', 4),
  imperativeInformal: Word('подрагивай', 4),
  imperativeFormal: Word('подрагивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подрагивать.name.text, подрагивать);

export { подрагивать };