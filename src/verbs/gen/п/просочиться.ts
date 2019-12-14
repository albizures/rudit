import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просочиться: PerfectVerb = {
  name: Word('просочиться', 6),
  singular1stPerson: Word('просочусь', 6),
  singular2ndPerson: Word('просочишься', 6),
  singular3rdPerson: Word('просочится', 6),
  plural1stPerson: Word('просочимся', 6),
  plural2ndPerson: Word('просочитесь', 6),
  plural3rdPerson: Word('просочатся', 6),
  masculinePast: Word('просочился', 6),
  femininePast: Word('просочилась', 6),
  neuterPast: Word('просочилось', 6),
  pluralPast: Word('просочились', 6),
  imperativeInformal: Word('просочись', 6),
  imperativeFormal: Word('просочитесь', 6),
  imperfect: [],
};

perfectVerbs.set(просочиться.name.text, просочиться);

export { просочиться };