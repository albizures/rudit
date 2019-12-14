import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкручивать: PerfectVerb = {
  name: Word('подкручивать', 5),
  singular1stPerson: Word('подкручиваю', 5),
  singular2ndPerson: Word('подкручиваешь', 5),
  singular3rdPerson: Word('подкручивает', 5),
  plural1stPerson: Word('подкручиваем', 5),
  plural2ndPerson: Word('подкручиваете', 5),
  plural3rdPerson: Word('подкручивают', 5),
  masculinePast: Word('подкручивал', 5),
  femininePast: Word('подкручивала', 5),
  neuterPast: Word('подкручивало', 5),
  pluralPast: Word('подкручивали', 5),
  imperativeInformal: Word('подкручивай', 5),
  imperativeFormal: Word('подкручивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подкручивать.name.text, подкручивать);

export { подкручивать };