import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перелицевать: PerfectVerb = {
  name: Word('перелицевать', 9),
  singular1stPerson: Word('перелицую', 7),
  singular2ndPerson: Word('перелицуешь', 7),
  singular3rdPerson: Word('перелицует', 7),
  plural1stPerson: Word('перелицуем', 7),
  plural2ndPerson: Word('перелицуете', 7),
  plural3rdPerson: Word('перелицуют', 7),
  masculinePast: Word('перелицевал', 9),
  femininePast: Word('перелицевала', 9),
  neuterPast: Word('перелицевало', 9),
  pluralPast: Word('перелицевали', 9),
  imperativeInformal: Word('перелицуй', 7),
  imperativeFormal: Word('перелицуйте', 7),
  imperfect: [],
};

perfectVerbs.set(перелицевать.name.text, перелицевать);

export { перелицевать };