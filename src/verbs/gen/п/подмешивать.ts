import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмешивать: PerfectVerb = {
  name: Word('подмешивать', 4),
  singular1stPerson: Word('подмешиваю', 4),
  singular2ndPerson: Word('подмешиваешь', 4),
  singular3rdPerson: Word('подмешивает', 4),
  plural1stPerson: Word('подмешиваем', 4),
  plural2ndPerson: Word('подмешиваете', 4),
  plural3rdPerson: Word('подмешивают', 4),
  masculinePast: Word('подмешивал', 4),
  femininePast: Word('подмешивала', 4),
  neuterPast: Word('подмешивало', 4),
  pluralPast: Word('подмешивали', 4),
  imperativeInformal: Word('подмешивай', 4),
  imperativeFormal: Word('подмешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмешивать.name.text, подмешивать);

export { подмешивать };