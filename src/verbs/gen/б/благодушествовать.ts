import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благодушествовать: PerfectVerb = {
  name: Word('благодушествовать', 6),
  singular1stPerson: Word('благодушествую', 6),
  singular2ndPerson: Word('благодушествуешь', 6),
  singular3rdPerson: Word('благодушествует', 6),
  plural1stPerson: Word('благодушествуем', 6),
  plural2ndPerson: Word('благодушествуете', 6),
  plural3rdPerson: Word('благодушествуют', 6),
  masculinePast: Word('благодушествовал', 6),
  femininePast: Word('благодушествовала', 6),
  neuterPast: Word('благодушествовало', 6),
  pluralPast: Word('благодушествовали', 6),
  imperativeInformal: Word('благодушествуй', 6),
  imperativeFormal: Word('благодушествуйте', 6),
  imperfect: [],
};

perfectVerbs.set(благодушествовать.name.text, благодушествовать);

export { благодушествовать };