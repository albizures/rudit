import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорисовать: PerfectVerb = {
  name: Word('прорисовать', 8),
  singular1stPerson: Word('прорисую', 6),
  singular2ndPerson: Word('прорисуешь', 6),
  singular3rdPerson: Word('прорисует', 6),
  plural1stPerson: Word('прорисуем', 6),
  plural2ndPerson: Word('прорисуете', 6),
  plural3rdPerson: Word('прорисуют', 6),
  masculinePast: Word('прорисовал', 8),
  femininePast: Word('прорисовала', 8),
  neuterPast: Word('прорисовало', 8),
  pluralPast: Word('прорисовали', 8),
  imperativeInformal: Word('прорисуй', 6),
  imperativeFormal: Word('прорисуйте', 6),
  imperfect: [],
};

perfectVerbs.set(прорисовать.name.text, прорисовать);

export { прорисовать };