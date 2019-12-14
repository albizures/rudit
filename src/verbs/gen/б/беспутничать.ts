import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беспутничать: PerfectVerb = {
  name: Word('беспутничать', 4),
  singular1stPerson: Word('беспутничаю', 4),
  singular2ndPerson: Word('беспутничаешь', 4),
  singular3rdPerson: Word('беспутничает', 4),
  plural1stPerson: Word('беспутничаем', 4),
  plural2ndPerson: Word('беспутничаете', 4),
  plural3rdPerson: Word('беспутничают', 4),
  masculinePast: Word('беспутничал', 4),
  femininePast: Word('беспутничала', 4),
  neuterPast: Word('беспутничало', 4),
  pluralPast: Word('беспутничали', 4),
  imperativeInformal: Word('беспутничай', 4),
  imperativeFormal: Word('беспутничайте', 4),
  imperfect: [],
};

perfectVerbs.set(беспутничать.name.text, беспутничать);

export { беспутничать };