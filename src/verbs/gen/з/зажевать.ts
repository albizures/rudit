import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажевать: PerfectVerb = {
  name: Word('зажевать', 5),
  singular1stPerson: Word('зажую', 4),
  singular2ndPerson: Word('зажуёшь', 1),
  singular3rdPerson: Word('зажуёт', 1),
  plural1stPerson: Word('зажуём', 1),
  plural2ndPerson: Word('зажуёте', 1),
  plural3rdPerson: Word('зажуют', 4),
  masculinePast: Word('зажевал', 5),
  femininePast: Word('зажевала', 5),
  neuterPast: Word('зажевало', 5),
  pluralPast: Word('зажевали', 5),
  imperativeInformal: Word('зажуй', 3),
  imperativeFormal: Word('зажуйте', 3),
  imperfect: [],
};

perfectVerbs.set(зажевать.name.text, зажевать);

export { зажевать };