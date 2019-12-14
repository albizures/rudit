import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мытариться: PerfectVerb = {
  name: Word('мытариться', 3),
  singular1stPerson: Word('мытарюсь', 3),
  singular2ndPerson: Word('мытаришься', 3),
  singular3rdPerson: Word('мытарится', 3),
  plural1stPerson: Word('мытаримся', 3),
  plural2ndPerson: Word('мытаритесь', 3),
  plural3rdPerson: Word('мытарятся', 3),
  masculinePast: Word('мытарился', 3),
  femininePast: Word('мытарилась', 3),
  neuterPast: Word('мытарилось', 3),
  pluralPast: Word('мытарились', 3),
  imperativeInformal: Word('мытарься', 3),
  imperativeFormal: Word('мытарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(мытариться.name.text, мытариться);

export { мытариться };