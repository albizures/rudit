import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заручиться: PerfectVerb = {
  name: Word('заручиться', 5),
  singular1stPerson: Word('заручусь', 5),
  singular2ndPerson: Word('заручишься', 5),
  singular3rdPerson: Word('заручится', 5),
  plural1stPerson: Word('заручимся', 5),
  plural2ndPerson: Word('заручитесь', 5),
  plural3rdPerson: Word('заручатся', 5),
  masculinePast: Word('заручился', 5),
  femininePast: Word('заручилась', 5),
  neuterPast: Word('заручилось', 5),
  pluralPast: Word('заручились', 5),
  imperativeInformal: Word('заручись', 5),
  imperativeFormal: Word('заручитесь', 5),
  imperfect: [],
};

perfectVerbs.set(заручиться.name.text, заручиться);

export { заручиться };