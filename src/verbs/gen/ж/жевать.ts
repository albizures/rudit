import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жевать: PerfectVerb = {
  name: Word('жевать', 3),
  singular1stPerson: Word('жую', 2),
  singular2ndPerson: Word('жуёшь', 1),
  singular3rdPerson: Word('жуёт', 1),
  plural1stPerson: Word('жуём', 1),
  plural2ndPerson: Word('жуёте', 4),
  plural3rdPerson: Word('жуют', 2),
  masculinePast: Word('жевал', 3),
  femininePast: Word('жевала', 3),
  neuterPast: Word('жевало', 3),
  pluralPast: Word('жевали', 3),
  imperativeInformal: Word('жуй', 1),
  imperativeFormal: Word('жуйте', 1),
  imperfect: ['пожевать'],
};

perfectVerbs.set(жевать.name.text, жевать);

export { жевать };