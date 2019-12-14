import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const театрализовать: PerfectVerb = {
  name: Word('театрализовать', 11),
  singular1stPerson: Word('театрализую', 9),
  singular2ndPerson: Word('театрализуешь', 9),
  singular3rdPerson: Word('театрализует', 9),
  plural1stPerson: Word('театрализуем', 9),
  plural2ndPerson: Word('театрализуете', 9),
  plural3rdPerson: Word('театрализуют', 9),
  masculinePast: Word('театрализовал', 11),
  femininePast: Word('театрализовала', 11),
  neuterPast: Word('театрализовало', 11),
  pluralPast: Word('театрализовали', 11),
  imperativeInformal: Word('театрализуй', 9),
  imperativeFormal: Word('театрализуйте', 9),
  imperfect: [],
};

perfectVerbs.set(театрализовать.name.text, театрализовать);

export { театрализовать };