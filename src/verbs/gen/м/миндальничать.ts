import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const миндальничать: PerfectVerb = {
  name: Word('миндальничать', 4),
  singular1stPerson: Word('миндальничаю', 4),
  singular2ndPerson: Word('миндальничаешь', 4),
  singular3rdPerson: Word('миндальничает', 4),
  plural1stPerson: Word('миндальничаем', 4),
  plural2ndPerson: Word('миндальничаете', 4),
  plural3rdPerson: Word('миндальничают', 4),
  masculinePast: Word('миндальничал', 4),
  femininePast: Word('миндальничала', 4),
  neuterPast: Word('миндальничало', 4),
  pluralPast: Word('миндальничали', 4),
  imperativeInformal: Word('миндальничай', 4),
  imperativeFormal: Word('миндальничайте', 4),
  imperfect: [],
};

perfectVerbs.set(миндальничать.name.text, миндальничать);

export { миндальничать };