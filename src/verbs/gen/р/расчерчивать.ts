import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчерчивать: PerfectVerb = {
  name: Word('расчерчивать', 4),
  singular1stPerson: Word('расчерчиваю', 4),
  singular2ndPerson: Word('расчерчиваешь', 4),
  singular3rdPerson: Word('расчерчивает', 4),
  plural1stPerson: Word('расчерчиваем', 4),
  plural2ndPerson: Word('расчерчиваете', 4),
  plural3rdPerson: Word('расчерчивают', 4),
  masculinePast: Word('расчерчивал', 4),
  femininePast: Word('расчерчивала', 4),
  neuterPast: Word('расчерчивало', 4),
  pluralPast: Word('расчерчивали', 4),
  imperativeInformal: Word('расчерчивай', 4),
  imperativeFormal: Word('расчерчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(расчерчивать.name.text, расчерчивать);

export { расчерчивать };