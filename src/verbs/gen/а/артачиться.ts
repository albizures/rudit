import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const артачиться: PerfectVerb = {
  name: Word('артачиться', 3),
  singular1stPerson: Word('артачусь', 3),
  singular2ndPerson: Word('артачишься', 3),
  singular3rdPerson: Word('артачится', 3),
  plural1stPerson: Word('артачимся', 3),
  plural2ndPerson: Word('артачитесь', 3),
  plural3rdPerson: Word('артачатся', 3),
  masculinePast: Word('артачился', 3),
  femininePast: Word('артачилась', 3),
  neuterPast: Word('артачилось', 3),
  pluralPast: Word('артачились', 3),
  imperativeInformal: Word('артачься', 3),
  imperativeFormal: Word('артачьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(артачиться.name.text, артачиться);

export { артачиться };