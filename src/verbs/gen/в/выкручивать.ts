import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкручивать: PerfectVerb = {
  name: Word('выкручивать', 4),
  singular1stPerson: Word('выкручиваю', 4),
  singular2ndPerson: Word('выкручиваешь', 4),
  singular3rdPerson: Word('выкручивает', 4),
  plural1stPerson: Word('выкручиваем', 4),
  plural2ndPerson: Word('выкручиваете', 4),
  plural3rdPerson: Word('выкручивают', 4),
  masculinePast: Word('выкручивал', 4),
  femininePast: Word('выкручивала', 4),
  neuterPast: Word('выкручивало', 4),
  pluralPast: Word('выкручивали', 4),
  imperativeInformal: Word('выкручивай', 4),
  imperativeFormal: Word('выкручивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выкручивать.name.text, выкручивать);

export { выкручивать };