import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заартачиться: PerfectVerb = {
  name: Word('заартачиться', 5),
  singular1stPerson: Word('заартачусь', 5),
  singular2ndPerson: Word('заартачишься', 5),
  singular3rdPerson: Word('заартачится', 5),
  plural1stPerson: Word('заартачимся', 5),
  plural2ndPerson: Word('заартачитесь', 5),
  plural3rdPerson: Word('заартачатся', 5),
  masculinePast: Word('заартачился', 5),
  femininePast: Word('заартачилась', 5),
  neuterPast: Word('заартачилось', 5),
  pluralPast: Word('заартачились', 5),
  imperativeInformal: Word('заартачься', 5),
  imperativeFormal: Word('заартачьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заартачиться.name.text, заартачиться);

export { заартачиться };