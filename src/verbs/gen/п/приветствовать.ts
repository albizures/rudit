import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приветствовать: PerfectVerb = {
  name: Word('приветствовать', 4),
  singular1stPerson: Word('приветствую', 4),
  singular2ndPerson: Word('приветствуешь', 4),
  singular3rdPerson: Word('приветствует', 4),
  plural1stPerson: Word('приветствуем', 4),
  plural2ndPerson: Word('приветствуете', 4),
  plural3rdPerson: Word('приветствуют', 4),
  masculinePast: Word('приветствовал', 4),
  femininePast: Word('приветствовала', 4),
  neuterPast: Word('приветствовало', 4),
  pluralPast: Word('приветствовали', 4),
  imperativeInformal: Word('приветствуй', 4),
  imperativeFormal: Word('приветствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(приветствовать.name.text, приветствовать);

export { приветствовать };