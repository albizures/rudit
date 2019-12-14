import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожариться: PerfectVerb = {
  name: Word('прожариться', 4),
  singular1stPerson: Word('прожарюсь', 4),
  singular2ndPerson: Word('прожаришься', 4),
  singular3rdPerson: Word('прожарится', 4),
  plural1stPerson: Word('прожаримся', 4),
  plural2ndPerson: Word('прожаритесь', 4),
  plural3rdPerson: Word('прожарятся', 4),
  masculinePast: Word('прожарился', 4),
  femininePast: Word('прожарилась', 4),
  neuterPast: Word('прожарилось', 4),
  pluralPast: Word('прожарились', 4),
  imperativeInformal: Word('прожарься', 4),
  imperativeFormal: Word('прожарьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прожариться.name.text, прожариться);

export { прожариться };