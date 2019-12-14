import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмешивать: PerfectVerb = {
  name: Word('вмешивать', 2),
  singular1stPerson: Word('вмешиваю', 2),
  singular2ndPerson: Word('вмешиваешь', 2),
  singular3rdPerson: Word('вмешивает', 2),
  plural1stPerson: Word('вмешиваем', 2),
  plural2ndPerson: Word('вмешиваете', 2),
  plural3rdPerson: Word('вмешивают', 2),
  masculinePast: Word('вмешивал', 2),
  femininePast: Word('вмешивала', 2),
  neuterPast: Word('вмешивало', 2),
  pluralPast: Word('вмешивали', 2),
  imperativeInformal: Word('вмешивай', 2),
  imperativeFormal: Word('вмешивайте', 2),
  imperfect: [],
};

perfectVerbs.set(вмешивать.name.text, вмешивать);

export { вмешивать };