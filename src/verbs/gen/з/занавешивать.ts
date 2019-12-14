import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const занавешивать: PerfectVerb = {
  name: Word('занавешивать', 5),
  singular1stPerson: Word('занавешиваю', 5),
  singular2ndPerson: Word('занавешиваешь', 5),
  singular3rdPerson: Word('занавешивает', 5),
  plural1stPerson: Word('занавешиваем', 5),
  plural2ndPerson: Word('занавешиваете', 5),
  plural3rdPerson: Word('занавешивают', 5),
  masculinePast: Word('занавешивал', 5),
  femininePast: Word('занавешивала', 5),
  neuterPast: Word('занавешивало', 5),
  pluralPast: Word('занавешивали', 5),
  imperativeInformal: Word('занавешивай', 5),
  imperativeFormal: Word('занавешивайте', 5),
  imperfect: [],
};

perfectVerbs.set(занавешивать.name.text, занавешивать);

export { занавешивать };