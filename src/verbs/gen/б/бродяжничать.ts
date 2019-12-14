import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бродяжничать: PerfectVerb = {
  name: Word('бродяжничать', 4),
  singular1stPerson: Word('бродяжничаю', 4),
  singular2ndPerson: Word('бродяжничаешь', 4),
  singular3rdPerson: Word('бродяжничает', 4),
  plural1stPerson: Word('бродяжничаем', 4),
  plural2ndPerson: Word('бродяжничаете', 4),
  plural3rdPerson: Word('бродяжничают', 4),
  masculinePast: Word('бродяжничал', 4),
  femininePast: Word('бродяжничала', 4),
  neuterPast: Word('бродяжничало', 4),
  pluralPast: Word('бродяжничали', 4),
  imperativeInformal: Word('бродяжничай', 4),
  imperativeFormal: Word('бродяжничайте', 4),
  imperfect: [],
};

perfectVerbs.set(бродяжничать.name.text, бродяжничать);

export { бродяжничать };