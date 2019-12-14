import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помочиться: PerfectVerb = {
  name: Word('помочиться', 5),
  singular1stPerson: Word('помочусь', 5),
  singular2ndPerson: Word('помочишься', 3),
  singular3rdPerson: Word('помочится', 3),
  plural1stPerson: Word('помочимся', 3),
  plural2ndPerson: Word('помочитесь', 3),
  plural3rdPerson: Word('помочатся', 3),
  masculinePast: Word('помочился', 5),
  femininePast: Word('помочилась', 5),
  neuterPast: Word('помочилось', 5),
  pluralPast: Word('помочились', 5),
  imperativeInformal: Word('помочись', 5),
  imperativeFormal: Word('помочитесь', 5),
  imperfect: [],
};

perfectVerbs.set(помочиться.name.text, помочиться);

export { помочиться };