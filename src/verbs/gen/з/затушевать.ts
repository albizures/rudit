import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затушевать: PerfectVerb = {
  name: Word('затушевать', 7),
  singular1stPerson: Word('затушую', 5),
  singular2ndPerson: Word('затушуешь', 5),
  singular3rdPerson: Word('затушует', 5),
  plural1stPerson: Word('затушуем', 5),
  plural2ndPerson: Word('затушуете', 5),
  plural3rdPerson: Word('затушуют', 5),
  masculinePast: Word('затушевал', 7),
  femininePast: Word('затушевала', 7),
  neuterPast: Word('затушевало', 7),
  pluralPast: Word('затушевали', 7),
  imperativeInformal: Word('затушуй', 5),
  imperativeFormal: Word('затушуйте', 5),
  imperfect: [],
};

perfectVerbs.set(затушевать.name.text, затушевать);

export { затушевать };