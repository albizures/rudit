import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спекулировать: PerfectVerb = {
  name: Word('спекулировать', 6),
  singular1stPerson: Word('спекулирую', 6),
  singular2ndPerson: Word('спекулируешь', 6),
  singular3rdPerson: Word('спекулирует', 6),
  plural1stPerson: Word('спекулируем', 6),
  plural2ndPerson: Word('спекулируете', 6),
  plural3rdPerson: Word('спекулируют', 6),
  masculinePast: Word('спекулировал', 6),
  femininePast: Word('спекулировала', 6),
  neuterPast: Word('спекулировало', 6),
  pluralPast: Word('спекулировали', 6),
  imperativeInformal: Word('спекулируй', 6),
  imperativeFormal: Word('спекулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(спекулировать.name.text, спекулировать);

export { спекулировать };