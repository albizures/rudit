import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухватиться: PerfectVerb = {
  name: Word('ухватиться', 5),
  singular1stPerson: Word('ухвачусь', 5),
  singular2ndPerson: Word('ухватишься', 3),
  singular3rdPerson: Word('ухватится', 3),
  plural1stPerson: Word('ухватимся', 3),
  plural2ndPerson: Word('ухватитесь', 3),
  plural3rdPerson: Word('ухватятся', 3),
  masculinePast: Word('ухватился', 5),
  femininePast: Word('ухватилась', 5),
  neuterPast: Word('ухватилось', 5),
  pluralPast: Word('ухватились', 5),
  imperativeInformal: Word('ухватись', 5),
  imperativeFormal: Word('ухватитесь', 5),
  imperfect: [],
};

perfectVerbs.set(ухватиться.name.text, ухватиться);

export { ухватиться };