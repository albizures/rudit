import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const волочиться: PerfectVerb = {
  name: Word('волочиться', 5),
  singular1stPerson: Word('волочусь', 5),
  singular2ndPerson: Word('волочишься', 3),
  singular3rdPerson: Word('волочится', 3),
  plural1stPerson: Word('волочимся', 3),
  plural2ndPerson: Word('волочитесь', 3),
  plural3rdPerson: Word('волочатся', 3),
  masculinePast: Word('волочился', 5),
  femininePast: Word('волочилась', 5),
  neuterPast: Word('волочилось', 5),
  pluralPast: Word('волочились', 5),
  imperativeInformal: Word('волочись', 5),
  imperativeFormal: Word('волочитесь', 5),
  imperfect: [],
};

perfectVerbs.set(волочиться.name.text, волочиться);

export { волочиться };