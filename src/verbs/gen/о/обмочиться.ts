import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмочиться: PerfectVerb = {
  name: Word('обмочиться', 5),
  singular1stPerson: Word('обмочусь', 5),
  singular2ndPerson: Word('обмочишься', 3),
  singular3rdPerson: Word('обмочится', 3),
  plural1stPerson: Word('обмочимся', 3),
  plural2ndPerson: Word('обмочитесь', 3),
  plural3rdPerson: Word('обмочатся', 3),
  masculinePast: Word('обмочился', 5),
  femininePast: Word('обмочилась', 5),
  neuterPast: Word('обмочилось', 5),
  pluralPast: Word('обмочились', 5),
  imperativeInformal: Word('обмочись', 5),
  imperativeFormal: Word('обмочитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обмочиться.name.text, обмочиться);

export { обмочиться };