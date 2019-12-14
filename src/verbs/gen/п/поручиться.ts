import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поручиться: PerfectVerb = {
  name: Word('поручиться', 5),
  singular1stPerson: Word('поручусь', 5),
  singular2ndPerson: Word('поручишься', 3),
  singular3rdPerson: Word('поручится', 3),
  plural1stPerson: Word('поручимся', 3),
  plural2ndPerson: Word('поручитесь', 3),
  plural3rdPerson: Word('поручатся', 3),
  masculinePast: Word('поручился', 5),
  femininePast: Word('поручилась', 5),
  neuterPast: Word('поручилось', 5),
  pluralPast: Word('поручились', 5),
  imperativeInformal: Word('поручись', 5),
  imperativeFormal: Word('поручитесь', 5),
  imperfect: [],
};

perfectVerbs.set(поручиться.name.text, поручиться);

export { поручиться };