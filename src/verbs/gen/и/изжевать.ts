import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изжевать: PerfectVerb = {
  name: Word('изжевать', 5),
  singular1stPerson: Word('изжую', 4),
  singular2ndPerson: Word('изжуёшь', 4),
  singular3rdPerson: Word('изжуёт', 4),
  plural1stPerson: Word('изжуём', 4),
  plural2ndPerson: Word('изжуёте', 4),
  plural3rdPerson: Word('изжуют', 4),
  masculinePast: Word('изжевал', 5),
  femininePast: Word('изжевала', 5),
  neuterPast: Word('изжевало', 5),
  pluralPast: Word('изжевали', 5),
  imperativeInformal: Word('изжуй', 3),
  imperativeFormal: Word('изжуйте', 3),
  imperfect: [],
};

perfectVerbs.set(изжевать.name.text, изжевать);

export { изжевать };