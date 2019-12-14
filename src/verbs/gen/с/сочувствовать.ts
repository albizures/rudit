import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочувствовать: PerfectVerb = {
  name: Word('сочувствовать', 3),
  singular1stPerson: Word('сочувствую', 3),
  singular2ndPerson: Word('сочувствуешь', 3),
  singular3rdPerson: Word('сочувствует', 3),
  plural1stPerson: Word('сочувствуем', 3),
  plural2ndPerson: Word('сочувствуете', 3),
  plural3rdPerson: Word('сочувствуют', 3),
  masculinePast: Word('сочувствовал', 3),
  femininePast: Word('сочувствовала', 3),
  neuterPast: Word('сочувствовало', 3),
  pluralPast: Word('сочувствовали', 3),
  imperativeInformal: Word('сочувствуй', 3),
  imperativeFormal: Word('сочувствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(сочувствовать.name.text, сочувствовать);

export { сочувствовать };