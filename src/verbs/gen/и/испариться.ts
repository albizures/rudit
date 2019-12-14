import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испариться: PerfectVerb = {
  name: Word('испариться', 5),
  singular1stPerson: Word('испарюсь', 5),
  singular2ndPerson: Word('испаришься', 5),
  singular3rdPerson: Word('испарится', 5),
  plural1stPerson: Word('испаримся', 5),
  plural2ndPerson: Word('испаритесь', 5),
  plural3rdPerson: Word('испарятся', 5),
  masculinePast: Word('испарился', 5),
  femininePast: Word('испарилась', 5),
  neuterPast: Word('испарилось', 5),
  pluralPast: Word('испарились', 5),
  imperativeInformal: Word('испарись', 5),
  imperativeFormal: Word('испаритесь', 5),
  imperfect: [],
};

perfectVerbs.set(испариться.name.text, испариться);

export { испариться };