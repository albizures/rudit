import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застревать: PerfectVerb = {
  name: Word('застревать', 7),
  singular1stPerson: Word('застреваю', 7),
  singular2ndPerson: Word('застреваешь', 7),
  singular3rdPerson: Word('застревает', 7),
  plural1stPerson: Word('застреваем', 7),
  plural2ndPerson: Word('застреваете', 7),
  plural3rdPerson: Word('застревают', 7),
  masculinePast: Word('застревал', 7),
  femininePast: Word('застревала', 7),
  neuterPast: Word('застревало', 7),
  pluralPast: Word('застревали', 7),
  imperativeInformal: Word('застревай', 7),
  imperativeFormal: Word('застревайте', 7),
  imperfect: ['застрять'],
};

perfectVerbs.set(застревать.name.text, застревать);

export { застревать };