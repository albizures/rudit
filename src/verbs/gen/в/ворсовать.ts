import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворсовать: PerfectVerb = {
  name: Word('ворсовать', 6),
  singular1stPerson: Word('ворсую', 4),
  singular2ndPerson: Word('ворсуешь', 4),
  singular3rdPerson: Word('ворсует', 4),
  plural1stPerson: Word('ворсуем', 4),
  plural2ndPerson: Word('ворсуете', 4),
  plural3rdPerson: Word('ворсуют', 4),
  masculinePast: Word('ворсовал', 6),
  femininePast: Word('ворсовала', 6),
  neuterPast: Word('ворсовало', 6),
  pluralPast: Word('ворсовали', 6),
  imperativeInformal: Word('ворсуй', 4),
  imperativeFormal: Word('ворсуйте', 4),
  imperfect: [],
};

perfectVerbs.set(ворсовать.name.text, ворсовать);

export { ворсовать };