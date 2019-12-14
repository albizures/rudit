import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поштопать: PerfectVerb = {
  name: Word('поштопать', 4),
  singular1stPerson: Word('поштопаю', 4),
  singular2ndPerson: Word('поштопаешь', 4),
  singular3rdPerson: Word('поштопает', 4),
  plural1stPerson: Word('поштопаем', 4),
  plural2ndPerson: Word('поштопаете', 4),
  plural3rdPerson: Word('поштопают', 4),
  masculinePast: Word('поштопал', 4),
  femininePast: Word('поштопала', 4),
  neuterPast: Word('поштопало', 4),
  pluralPast: Word('поштопали', 4),
  imperativeInformal: Word('поштопай', 4),
  imperativeFormal: Word('поштопайте', 4),
  imperfect: [],
};

perfectVerbs.set(поштопать.name.text, поштопать);

export { поштопать };