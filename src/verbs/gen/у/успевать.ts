import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успевать: PerfectVerb = {
  name: Word('успевать', 5),
  singular1stPerson: Word('успеваю', 5),
  singular2ndPerson: Word('успеваешь', 5),
  singular3rdPerson: Word('успевает', 5),
  plural1stPerson: Word('успеваем', 5),
  plural2ndPerson: Word('успеваете', 5),
  plural3rdPerson: Word('успевают', 5),
  masculinePast: Word('успевал', 5),
  femininePast: Word('успевала', 5),
  neuterPast: Word('успевало', 5),
  pluralPast: Word('успевали', 5),
  imperativeInformal: Word('успевай', 5),
  imperativeFormal: Word('успевайте', 5),
  imperfect: ['успеть'],
};

perfectVerbs.set(успевать.name.text, успевать);

export { успевать };