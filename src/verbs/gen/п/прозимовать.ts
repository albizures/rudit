import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозимовать: PerfectVerb = {
  name: Word('прозимовать', 8),
  singular1stPerson: Word('прозимую', 6),
  singular2ndPerson: Word('прозимуешь', 6),
  singular3rdPerson: Word('прозимует', 6),
  plural1stPerson: Word('прозимуем', 6),
  plural2ndPerson: Word('прозимуете', 6),
  plural3rdPerson: Word('прозимуют', 6),
  masculinePast: Word('прозимовал', 8),
  femininePast: Word('прозимовала', 8),
  neuterPast: Word('прозимовало', 8),
  pluralPast: Word('прозимовали', 8),
  imperativeInformal: Word('прозимуй', 6),
  imperativeFormal: Word('прозимуйте', 6),
  imperfect: [],
};

perfectVerbs.set(прозимовать.name.text, прозимовать);

export { прозимовать };