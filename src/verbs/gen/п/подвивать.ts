import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвивать: PerfectVerb = {
  name: Word('подвивать', 6),
  singular1stPerson: Word('подвиваю', 6),
  singular2ndPerson: Word('подвиваешь', 6),
  singular3rdPerson: Word('подвивает', 6),
  plural1stPerson: Word('подвиваем', 6),
  plural2ndPerson: Word('подвиваете', 6),
  plural3rdPerson: Word('подвивают', 6),
  masculinePast: Word('подвивал', 6),
  femininePast: Word('подвивала', 6),
  neuterPast: Word('подвивало', 6),
  pluralPast: Word('подвивали', 6),
  imperativeInformal: Word('подвивай', 6),
  imperativeFormal: Word('подвивайте', 6),
  imperfect: [],
};

perfectVerbs.set(подвивать.name.text, подвивать);

export { подвивать };