import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжевать: PerfectVerb = {
  name: Word('сжевать', 4),
  singular1stPerson: Word('сжую', 3),
  singular2ndPerson: Word('сжуёшь', 3),
  singular3rdPerson: Word('сжуёт', 3),
  plural1stPerson: Word('сжуём', 3),
  plural2ndPerson: Word('сжуёте', 3),
  plural3rdPerson: Word('сжуют', 3),
  masculinePast: Word('сжевал', 4),
  femininePast: Word('сжевала', 4),
  neuterPast: Word('сжевало', 4),
  pluralPast: Word('сжевали', 4),
  imperativeInformal: Word('сжуй', 2),
  imperativeFormal: Word('сжуйте', 2),
  imperfect: [],
};

perfectVerbs.set(сжевать.name.text, сжевать);

export { сжевать };