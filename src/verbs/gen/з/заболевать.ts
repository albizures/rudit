import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболевать: PerfectVerb = {
  name: Word('заболевать', 7),
  singular1stPerson: Word('заболеваю', 7),
  singular2ndPerson: Word('заболеваешь', 7),
  singular3rdPerson: Word('заболевает', 7),
  plural1stPerson: Word('заболеваем', 7),
  plural2ndPerson: Word('заболеваете', 7),
  plural3rdPerson: Word('заболевают', 7),
  masculinePast: Word('заболевал', 7),
  femininePast: Word('заболевала', 7),
  neuterPast: Word('заболевало', 7),
  pluralPast: Word('заболевали', 7),
  imperativeInformal: Word('заболевай', 7),
  imperativeFormal: Word('заболевайте', 7),
  imperfect: [],
};

perfectVerbs.set(заболевать.name.text, заболевать);

export { заболевать };