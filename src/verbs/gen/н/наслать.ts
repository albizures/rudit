import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслать: PerfectVerb = {
  name: Word('наслать', 4),
  singular1stPerson: Word('нашлю', 4),
  singular2ndPerson: Word('нашлёшь', 1),
  singular3rdPerson: Word('нашлёт', 1),
  plural1stPerson: Word('нашлём', 1),
  plural2ndPerson: Word('нашлёте', 1),
  plural3rdPerson: Word('нашлют', 4),
  masculinePast: Word('наслал', 4),
  femininePast: Word('наслала', 4),
  neuterPast: Word('наслало', 4),
  pluralPast: Word('наслали', 4),
  imperativeInformal: Word('нашли', 4),
  imperativeFormal: Word('нашлите', 4),
  imperfect: [],
};

perfectVerbs.set(наслать.name.text, наслать);

export { наслать };