import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выписаться: PerfectVerb = {
  name: Word('выписаться', 1),
  singular1stPerson: Word('выпишусь', 1),
  singular2ndPerson: Word('выпишешься', 1),
  singular3rdPerson: Word('выпишется', 1),
  plural1stPerson: Word('выпишемся', 1),
  plural2ndPerson: Word('выпишетесь', 1),
  plural3rdPerson: Word('выпишутся', 1),
  masculinePast: Word('выписался', 1),
  femininePast: Word('выписалась', 1),
  neuterPast: Word('выписалось', 1),
  pluralPast: Word('выписались', 1),
  imperativeInformal: Word('выпишись', 1),
  imperativeFormal: Word('выпишитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выписаться.name.text, выписаться);

export { выписаться };