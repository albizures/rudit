import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожевать: PerfectVerb = {
  name: Word('пожевать', 5),
  singular1stPerson: Word('пожую', 4),
  singular2ndPerson: Word('пожуёшь', 1),
  singular3rdPerson: Word('пожуёт', 1),
  plural1stPerson: Word('пожуём', 1),
  plural2ndPerson: Word('пожуёте', 6),
  plural3rdPerson: Word('пожуют', 4),
  masculinePast: Word('пожевал', 5),
  femininePast: Word('пожевала', 5),
  neuterPast: Word('пожевало', 5),
  pluralPast: Word('пожевали', 5),
  imperativeInformal: Word('пожуй', 3),
  imperativeFormal: Word('пожуйте', 3),
  imperfect: ['жевать'],
};

perfectVerbs.set(пожевать.name.text, пожевать);

export { пожевать };