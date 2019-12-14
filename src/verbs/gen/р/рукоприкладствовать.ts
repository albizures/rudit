import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукоприкладствовать: PerfectVerb = {
  name: Word('рукоприкладствовать', 9),
  singular1stPerson: Word('рукоприкладствую', 9),
  singular2ndPerson: Word('рукоприкладствуешь', 9),
  singular3rdPerson: Word('рукоприкладствует', 9),
  plural1stPerson: Word('рукоприкладствуем', 9),
  plural2ndPerson: Word('рукоприкладствуете', 9),
  plural3rdPerson: Word('рукоприкладствуют', 9),
  masculinePast: Word('рукоприкладствовал', 9),
  femininePast: Word('рукоприкладствовала', 9),
  neuterPast: Word('рукоприкладствовало', 9),
  pluralPast: Word('рукоприкладствовали', 9),
  imperativeInformal: Word('рукоприкладствуй', 9),
  imperativeFormal: Word('рукоприкладствуйте', 9),
  imperfect: [],
};

perfectVerbs.set(рукоприкладствовать.name.text, рукоприкладствовать);

export { рукоприкладствовать };