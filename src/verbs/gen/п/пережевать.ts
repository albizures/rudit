import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережевать: PerfectVerb = {
  name: Word('пережевать', 7),
  singular1stPerson: Word('пережую', 6),
  singular2ndPerson: Word('пережуёшь', 6),
  singular3rdPerson: Word('пережуёт', 6),
  plural1stPerson: Word('пережуём', 6),
  plural2ndPerson: Word('пережуёте', 6),
  plural3rdPerson: Word('пережуют', 6),
  masculinePast: Word('пережевал', 7),
  femininePast: Word('пережевала', 7),
  neuterPast: Word('пережевало', 7),
  pluralPast: Word('пережевали', 7),
  imperativeInformal: Word('пережуй', 5),
  imperativeFormal: Word('пережуйте', 5),
  imperfect: [],
};

perfectVerbs.set(пережевать.name.text, пережевать);

export { пережевать };