import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бушевать: PerfectVerb = {
  name: Word('бушевать', 5),
  singular1stPerson: Word('бушую', 3),
  singular2ndPerson: Word('бушуешь', 3),
  singular3rdPerson: Word('бушует', 3),
  plural1stPerson: Word('бушуем', 3),
  plural2ndPerson: Word('бушуете', 3),
  plural3rdPerson: Word('бушуют', 3),
  masculinePast: Word('бушевал', 5),
  femininePast: Word('бушевала', 5),
  neuterPast: Word('бушевало', 5),
  pluralPast: Word('бушевали', 5),
  imperativeInformal: Word('бушуй', 3),
  imperativeFormal: Word('бушуйте', 3),
  imperfect: [],
};

perfectVerbs.set(бушевать.name.text, бушевать);

export { бушевать };