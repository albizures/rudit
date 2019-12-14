import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посредничать: PerfectVerb = {
  name: Word('посредничать', 4),
  singular1stPerson: Word('посредничаю', 4),
  singular2ndPerson: Word('посредничаешь', 4),
  singular3rdPerson: Word('посредничает', 4),
  plural1stPerson: Word('посредничаем', 4),
  plural2ndPerson: Word('посредничаете', 4),
  plural3rdPerson: Word('посредничают', 4),
  masculinePast: Word('посредничал', 4),
  femininePast: Word('посредничала', 4),
  neuterPast: Word('посредничало', 4),
  pluralPast: Word('посредничали', 4),
  imperativeInformal: Word('посредничай', 4),
  imperativeFormal: Word('посредничайте', 4),
  imperfect: [],
};

perfectVerbs.set(посредничать.name.text, посредничать);

export { посредничать };