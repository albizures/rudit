import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облачиться: PerfectVerb = {
  name: Word('облачиться', 5),
  singular1stPerson: Word('облачусь', 5),
  singular2ndPerson: Word('облачишься', 5),
  singular3rdPerson: Word('облачится', 5),
  plural1stPerson: Word('облачимся', 5),
  plural2ndPerson: Word('облачитесь', 5),
  plural3rdPerson: Word('облачатся', 5),
  masculinePast: Word('облачился', 5),
  femininePast: Word('облачилась', 5),
  neuterPast: Word('облачилось', 5),
  pluralPast: Word('облачились', 5),
  imperativeInformal: Word('облачись', 5),
  imperativeFormal: Word('облачитесь', 5),
  imperfect: [],
};

perfectVerbs.set(облачиться.name.text, облачиться);

export { облачиться };