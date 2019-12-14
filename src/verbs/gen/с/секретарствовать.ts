import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const секретарствовать: PerfectVerb = {
  name: Word('секретарствовать', 6),
  singular1stPerson: Word('секретарствую', 6),
  singular2ndPerson: Word('секретарствуешь', 6),
  singular3rdPerson: Word('секретарствует', 6),
  plural1stPerson: Word('секретарствуем', 6),
  plural2ndPerson: Word('секретарствуете', 6),
  plural3rdPerson: Word('секретарствуют', 6),
  masculinePast: Word('секретарствовал', 6),
  femininePast: Word('секретарствовала', 6),
  neuterPast: Word('секретарствовало', 6),
  pluralPast: Word('секретарствовали', 6),
  imperativeInformal: Word('секретарствуй', 6),
  imperativeFormal: Word('секретарствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(секретарствовать.name.text, секретарствовать);

export { секретарствовать };