import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намочиться: PerfectVerb = {
  name: Word('намочиться', 5),
  singular1stPerson: Word('намочусь', 5),
  singular2ndPerson: Word('намочишься', 3),
  singular3rdPerson: Word('намочится', 3),
  plural1stPerson: Word('намочимся', 3),
  plural2ndPerson: Word('намочитесь', 3),
  plural3rdPerson: Word('намочатся', 3),
  masculinePast: Word('намочился', 5),
  femininePast: Word('намочилась', 5),
  neuterPast: Word('намочилось', 5),
  pluralPast: Word('намочились', 5),
  imperativeInformal: Word('намочись', 5),
  imperativeFormal: Word('намочитесь', 5),
  imperfect: [],
};

perfectVerbs.set(намочиться.name.text, намочиться);

export { намочиться };