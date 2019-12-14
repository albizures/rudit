import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const участиться: PerfectVerb = {
  name: Word('участиться', 5),
  singular1stPerson: Word('учащусь', 4),
  singular2ndPerson: Word('участишься', 5),
  singular3rdPerson: Word('участится', 5),
  plural1stPerson: Word('участимся', 5),
  plural2ndPerson: Word('участитесь', 5),
  plural3rdPerson: Word('участятся', 5),
  masculinePast: Word('участился', 5),
  femininePast: Word('участилась', 5),
  neuterPast: Word('участилось', 5),
  pluralPast: Word('участились', 5),
  imperativeInformal: Word('участись', 5),
  imperativeFormal: Word('участитесь', 5),
  imperfect: [],
};

perfectVerbs.set(участиться.name.text, участиться);

export { участиться };