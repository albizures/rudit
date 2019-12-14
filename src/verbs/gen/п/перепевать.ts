import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепевать: PerfectVerb = {
  name: Word('перепевать', 7),
  singular1stPerson: Word('перепеваю', 7),
  singular2ndPerson: Word('перепеваешь', 7),
  singular3rdPerson: Word('перепевает', 7),
  plural1stPerson: Word('перепеваем', 7),
  plural2ndPerson: Word('перепеваете', 7),
  plural3rdPerson: Word('перепевают', 7),
  masculinePast: Word('перепевал', 7),
  femininePast: Word('перепевала', 7),
  neuterPast: Word('перепевало', 7),
  pluralPast: Word('перепевали', 7),
  imperativeInformal: Word('перепевай', 7),
  imperativeFormal: Word('перепевайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепевать.name.text, перепевать);

export { перепевать };