import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помолиться: PerfectVerb = {
  name: Word('помолиться', 5),
  singular1stPerson: Word('помолюсь', 5),
  singular2ndPerson: Word('помолишься', 3),
  singular3rdPerson: Word('помолится', 3),
  plural1stPerson: Word('помолимся', 3),
  plural2ndPerson: Word('помолитесь', 3),
  plural3rdPerson: Word('помолятся', 3),
  masculinePast: Word('помолился', 5),
  femininePast: Word('помолилась', 5),
  neuterPast: Word('помолилось', 5),
  pluralPast: Word('помолились', 5),
  imperativeInformal: Word('помолись', 5),
  imperativeFormal: Word('помолитесь', 5),
  imperfect: ['молиться'],
};

perfectVerbs.set(помолиться.name.text, помолиться);

export { помолиться };