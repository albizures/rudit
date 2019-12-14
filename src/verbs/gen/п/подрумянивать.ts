import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрумянивать: PerfectVerb = {
  name: Word('подрумянивать', 6),
  singular1stPerson: Word('подрумяниваю', 6),
  singular2ndPerson: Word('подрумяниваешь', 6),
  singular3rdPerson: Word('подрумянивает', 6),
  plural1stPerson: Word('подрумяниваем', 6),
  plural2ndPerson: Word('подрумяниваете', 6),
  plural3rdPerson: Word('подрумянивают', 6),
  masculinePast: Word('подрумянивал', 6),
  femininePast: Word('подрумянивала', 6),
  neuterPast: Word('подрумянивало', 6),
  pluralPast: Word('подрумянивали', 6),
  imperativeInformal: Word('подрумянивай', 6),
  imperativeFormal: Word('подрумянивайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрумянивать.name.text, подрумянивать);

export { подрумянивать };