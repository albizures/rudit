import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попугайничать: PerfectVerb = {
  name: Word('попугайничать', 5),
  singular1stPerson: Word('попугайничаю', 5),
  singular2ndPerson: Word('попугайничаешь', 5),
  singular3rdPerson: Word('попугайничает', 5),
  plural1stPerson: Word('попугайничаем', 5),
  plural2ndPerson: Word('попугайничаете', 5),
  plural3rdPerson: Word('попугайничают', 5),
  masculinePast: Word('попугайничал', 5),
  femininePast: Word('попугайничала', 5),
  neuterPast: Word('попугайничало', 5),
  pluralPast: Word('попугайничали', 5),
  imperativeInformal: Word('попугайничай', 5),
  imperativeFormal: Word('попугайничайте', 5),
  imperfect: [],
};

perfectVerbs.set(попугайничать.name.text, попугайничать);

export { попугайничать };