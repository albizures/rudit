import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочиться: PerfectVerb = {
  name: Word('сочиться', 3),
  singular1stPerson: Word('сочусь', 3),
  singular2ndPerson: Word('сочишься', 3),
  singular3rdPerson: Word('сочится', 3),
  plural1stPerson: Word('сочимся', 3),
  plural2ndPerson: Word('сочитесь', 3),
  plural3rdPerson: Word('сочатся', 3),
  masculinePast: Word('сочился', 3),
  femininePast: Word('сочилась', 3),
  neuterPast: Word('сочилось', 3),
  pluralPast: Word('сочились', 3),
  imperativeInformal: Word('сочись', 3),
  imperativeFormal: Word('сочитесь', 3),
  imperfect: [],
};

perfectVerbs.set(сочиться.name.text, сочиться);

export { сочиться };