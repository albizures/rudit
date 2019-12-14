import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстрагивать: PerfectVerb = {
  name: Word('выстрагивать', 5),
  singular1stPerson: Word('выстрагиваю', 5),
  singular2ndPerson: Word('выстрагиваешь', 5),
  singular3rdPerson: Word('выстрагивает', 5),
  plural1stPerson: Word('выстрагиваем', 5),
  plural2ndPerson: Word('выстрагиваете', 5),
  plural3rdPerson: Word('выстрагивают', 5),
  masculinePast: Word('выстрагивал', 5),
  femininePast: Word('выстрагивала', 5),
  neuterPast: Word('выстрагивало', 5),
  pluralPast: Word('выстрагивали', 5),
  imperativeInformal: Word('выстрагивай', 5),
  imperativeFormal: Word('выстрагивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выстрагивать.name.text, выстрагивать);

export { выстрагивать };