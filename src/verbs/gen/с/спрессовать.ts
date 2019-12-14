import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрессовать: PerfectVerb = {
  name: Word('спрессовать', 8),
  singular1stPerson: Word('спрессую', 6),
  singular2ndPerson: Word('спрессуешь', 6),
  singular3rdPerson: Word('спрессует', 6),
  plural1stPerson: Word('спрессуем', 6),
  plural2ndPerson: Word('спрессуете', 6),
  plural3rdPerson: Word('спрессуют', 6),
  masculinePast: Word('спрессовал', 8),
  femininePast: Word('спрессовала', 8),
  neuterPast: Word('спрессовало', 8),
  pluralPast: Word('спрессовали', 8),
  imperativeInformal: Word('спрессуй', 6),
  imperativeFormal: Word('спрессуйте', 6),
  imperfect: [],
};

perfectVerbs.set(спрессовать.name.text, спрессовать);

export { спрессовать };