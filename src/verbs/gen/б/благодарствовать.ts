import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благодарствовать: PerfectVerb = {
  name: Word('благодарствовать', 6),
  singular1stPerson: Word('благодарствую', 6),
  singular2ndPerson: Word('благодарствуешь', 6),
  singular3rdPerson: Word('благодарствует', 6),
  plural1stPerson: Word('благодарствуем', 6),
  plural2ndPerson: Word('благодарствуете', 6),
  plural3rdPerson: Word('благодарствуют', 6),
  masculinePast: Word('благодарствовал', 6),
  femininePast: Word('благодарствовала', 6),
  neuterPast: Word('благодарствовало', 6),
  pluralPast: Word('благодарствовали', 6),
  imperativeInformal: Word('благодарствуй', 6),
  imperativeFormal: Word('благодарствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(благодарствовать.name.text, благодарствовать);

export { благодарствовать };