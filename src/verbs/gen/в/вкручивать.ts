import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкручивать: PerfectVerb = {
  name: Word('вкручивать', 3),
  singular1stPerson: Word('вкручиваю', 3),
  singular2ndPerson: Word('вкручиваешь', 3),
  singular3rdPerson: Word('вкручивает', 3),
  plural1stPerson: Word('вкручиваем', 3),
  plural2ndPerson: Word('вкручиваете', 3),
  plural3rdPerson: Word('вкручивают', 3),
  masculinePast: Word('вкручивал', 3),
  femininePast: Word('вкручивала', 3),
  neuterPast: Word('вкручивало', 3),
  pluralPast: Word('вкручивали', 3),
  imperativeInformal: Word('вкручивай', 3),
  imperativeFormal: Word('вкручивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вкручивать.name.text, вкручивать);

export { вкручивать };