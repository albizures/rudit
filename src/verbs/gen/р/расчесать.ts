import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчесать: PerfectVerb = {
  name: Word('расчесать', 6),
  singular1stPerson: Word('расчешу', 6),
  singular2ndPerson: Word('расчешешь', 4),
  singular3rdPerson: Word('расчешет', 4),
  plural1stPerson: Word('расчешем', 4),
  plural2ndPerson: Word('расчешете', 4),
  plural3rdPerson: Word('расчешут', 4),
  masculinePast: Word('расчесал', 6),
  femininePast: Word('расчесала', 6),
  neuterPast: Word('расчесало', 6),
  pluralPast: Word('расчесали', 6),
  imperativeInformal: Word('расчеши', 6),
  imperativeFormal: Word('расчешите', 6),
  imperfect: [],
};

perfectVerbs.set(расчесать.name.text, расчесать);

export { расчесать };