import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мочиться: PerfectVerb = {
  name: Word('мочиться', 3),
  singular1stPerson: Word('мочусь', 3),
  singular2ndPerson: Word('мочишься', 1),
  singular3rdPerson: Word('мочится', 1),
  plural1stPerson: Word('мочимся', 1),
  plural2ndPerson: Word('мочитесь', 1),
  plural3rdPerson: Word('мочатся', 1),
  masculinePast: Word('мочился', 3),
  femininePast: Word('мочилась', 3),
  neuterPast: Word('мочилось', 3),
  pluralPast: Word('мочились', 3),
  imperativeInformal: Word('мочись', 3),
  imperativeFormal: Word('мочитесь', 3),
  imperfect: [],
};

perfectVerbs.set(мочиться.name.text, мочиться);

export { мочиться };