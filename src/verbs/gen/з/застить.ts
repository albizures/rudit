import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застить: PerfectVerb = {
  name: Word('застить', 1),
  singular1stPerson: Word('защу', 1),
  singular2ndPerson: Word('застишь', 1),
  singular3rdPerson: Word('застит', 1),
  plural1stPerson: Word('застим', 1),
  plural2ndPerson: Word('застите', 1),
  plural3rdPerson: Word('застят', 1),
  masculinePast: Word('застил', 1),
  femininePast: Word('застила', 1),
  neuterPast: Word('застило', 1),
  pluralPast: Word('застили', 1),
  imperativeInformal: Word('засти//за'сть', 1),
  imperativeFormal: Word('застите//за'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(застить.name.text, застить);

export { застить };