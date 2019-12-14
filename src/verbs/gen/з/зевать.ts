import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зевать: PerfectVerb = {
  name: Word('зевать', 3),
  singular1stPerson: Word('зеваю', 3),
  singular2ndPerson: Word('зеваешь', 3),
  singular3rdPerson: Word('зевает', 3),
  plural1stPerson: Word('зеваем', 3),
  plural2ndPerson: Word('зеваете', 3),
  plural3rdPerson: Word('зевают', 3),
  masculinePast: Word('зевал', 3),
  femininePast: Word('зевала', 3),
  neuterPast: Word('зевало', 3),
  pluralPast: Word('зевали', 3),
  imperativeInformal: Word('зевай', 3),
  imperativeFormal: Word('зевайте', 3),
  imperfect: ['зевнуть','прозевать'],
};

perfectVerbs.set(зевать.name.text, зевать);

export { зевать };