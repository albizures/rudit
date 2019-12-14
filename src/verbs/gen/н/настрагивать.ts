import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настрагивать: PerfectVerb = {
  name: Word('настрагивать', 5),
  singular1stPerson: Word('настрагиваю', 5),
  singular2ndPerson: Word('настрагиваешь', 5),
  singular3rdPerson: Word('настрагивает', 5),
  plural1stPerson: Word('настрагиваем', 5),
  plural2ndPerson: Word('настрагиваете', 5),
  plural3rdPerson: Word('настрагивают', 5),
  masculinePast: Word('настрагивал', 5),
  femininePast: Word('настрагивала', 5),
  neuterPast: Word('настрагивало', 5),
  pluralPast: Word('настрагивали', 5),
  imperativeInformal: Word('настрагивай', 5),
  imperativeFormal: Word('настрагивайте', 5),
  imperfect: [],
};

perfectVerbs.set(настрагивать.name.text, настрагивать);

export { настрагивать };