import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заночевать: PerfectVerb = {
  name: Word('заночевать', 7),
  singular1stPerson: Word('заночую', 5),
  singular2ndPerson: Word('заночуешь', 5),
  singular3rdPerson: Word('заночует', 5),
  plural1stPerson: Word('заночуем', 5),
  plural2ndPerson: Word('заночуете', 5),
  plural3rdPerson: Word('заночуют', 5),
  masculinePast: Word('заночевал', 7),
  femininePast: Word('заночевала', 7),
  neuterPast: Word('заночевало', 7),
  pluralPast: Word('заночевали', 7),
  imperativeInformal: Word('заночуй', 5),
  imperativeFormal: Word('заночуйте', 5),
  imperfect: [],
};

perfectVerbs.set(заночевать.name.text, заночевать);

export { заночевать };