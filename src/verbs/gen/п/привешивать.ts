import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привешивать: PerfectVerb = {
  name: Word('привешивать', 4),
  singular1stPerson: Word('привешиваю', 4),
  singular2ndPerson: Word('привешиваешь', 4),
  singular3rdPerson: Word('привешивает', 4),
  plural1stPerson: Word('привешиваем', 4),
  plural2ndPerson: Word('привешиваете', 4),
  plural3rdPerson: Word('привешивают', 4),
  masculinePast: Word('привешивал', 4),
  femininePast: Word('привешивала', 4),
  neuterPast: Word('привешивало', 4),
  pluralPast: Word('привешивали', 4),
  imperativeInformal: Word('привешивай', 4),
  imperativeFormal: Word('привешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(привешивать.name.text, привешивать);

export { привешивать };