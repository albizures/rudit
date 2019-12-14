import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одевать: PerfectVerb = {
  name: Word('одевать', 4),
  singular1stPerson: Word('одеваю', 4),
  singular2ndPerson: Word('одеваешь', 4),
  singular3rdPerson: Word('одевает', 4),
  plural1stPerson: Word('одеваем', 4),
  plural2ndPerson: Word('одеваете', 4),
  plural3rdPerson: Word('одевают', 4),
  masculinePast: Word('одевал', 4),
  femininePast: Word('одевала', 4),
  neuterPast: Word('одевало', 4),
  pluralPast: Word('одевали', 4),
  imperativeInformal: Word('одевай', 4),
  imperativeFormal: Word('одевайте', 4),
  imperfect: ['одеть'],
};

perfectVerbs.set(одевать.name.text, одевать);

export { одевать };