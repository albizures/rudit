import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукодельничать: PerfectVerb = {
  name: Word('рукодельничать', 5),
  singular1stPerson: Word('рукодельничаю', 5),
  singular2ndPerson: Word('рукодельничаешь', 5),
  singular3rdPerson: Word('рукодельничает', 5),
  plural1stPerson: Word('рукодельничаем', 5),
  plural2ndPerson: Word('рукодельничаете', 5),
  plural3rdPerson: Word('рукодельничают', 5),
  masculinePast: Word('рукодельничал', 5),
  femininePast: Word('рукодельничала', 5),
  neuterPast: Word('рукодельничало', 5),
  pluralPast: Word('рукодельничали', 5),
  imperativeInformal: Word('рукодельничай', 5),
  imperativeFormal: Word('рукодельничайте', 5),
  imperfect: [],
};

perfectVerbs.set(рукодельничать.name.text, рукодельничать);

export { рукодельничать };