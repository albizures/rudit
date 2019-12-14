import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекочевать: PerfectVerb = {
  name: Word('перекочевать', 9),
  singular1stPerson: Word('перекочую', 7),
  singular2ndPerson: Word('перекочуешь', 7),
  singular3rdPerson: Word('перекочует', 7),
  plural1stPerson: Word('перекочуем', 7),
  plural2ndPerson: Word('перекочуете', 7),
  plural3rdPerson: Word('перекочуют', 7),
  masculinePast: Word('перекочевал', 9),
  femininePast: Word('перекочевала', 9),
  neuterPast: Word('перекочевало', 9),
  pluralPast: Word('перекочевали', 9),
  imperativeInformal: Word('перекочуй', 7),
  imperativeFormal: Word('перекочуйте', 7),
  imperfect: [],
};

perfectVerbs.set(перекочевать.name.text, перекочевать);

export { перекочевать };