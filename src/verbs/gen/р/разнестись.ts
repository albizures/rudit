import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнестись: PerfectVerb = {
  name: Word('разнестись', 7),
  singular1stPerson: Word('разнесусь', 6),
  singular2ndPerson: Word('разнесёшься', 1),
  singular3rdPerson: Word('разнесётся', 1),
  plural1stPerson: Word('разнесёмся', 1),
  plural2ndPerson: Word('разнесётесь', 1),
  plural3rdPerson: Word('разнесутся', 6),
  masculinePast: Word('разнёсся', 1),
  femininePast: Word('разнеслась', 7),
  neuterPast: Word('разнеслось', 7),
  pluralPast: Word('разнеслись', 7),
  imperativeInformal: Word('разнесись', 6),
  imperativeFormal: Word('разнеситесь', 6),
  imperfect: [],
};

perfectVerbs.set(разнестись.name.text, разнестись);

export { разнестись };