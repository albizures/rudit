import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подбивать: PerfectVerb = {
  name: Word('подбивать', 6),
  singular1stPerson: Word('подбиваю', 6),
  singular2ndPerson: Word('подбиваешь', 6),
  singular3rdPerson: Word('подбивает', 6),
  plural1stPerson: Word('подбиваем', 6),
  plural2ndPerson: Word('подбиваете', 6),
  plural3rdPerson: Word('подбивают', 6),
  masculinePast: Word('подбивал', 6),
  femininePast: Word('подбивала', 6),
  neuterPast: Word('подбивало', 6),
  pluralPast: Word('подбивали', 6),
  imperativeInformal: Word('подбивай', 6),
  imperativeFormal: Word('подбивайте', 6),
  imperfect: ['подбить'],
};

perfectVerbs.set(подбивать.name.text, подбивать);

export { подбивать };