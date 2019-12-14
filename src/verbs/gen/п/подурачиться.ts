import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подурачиться: PerfectVerb = {
  name: Word('подурачиться', 5),
  singular1stPerson: Word('подурачусь', 5),
  singular2ndPerson: Word('подурачишься', 5),
  singular3rdPerson: Word('подурачится', 5),
  plural1stPerson: Word('подурачимся', 5),
  plural2ndPerson: Word('подурачитесь', 5),
  plural3rdPerson: Word('подурачатся', 5),
  masculinePast: Word('подурачился', 5),
  femininePast: Word('подурачилась', 5),
  neuterPast: Word('подурачилось', 5),
  pluralPast: Word('подурачились', 5),
  imperativeInformal: Word('подурачься', 5),
  imperativeFormal: Word('подурачьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подурачиться.name.text, подурачиться);

export { подурачиться };