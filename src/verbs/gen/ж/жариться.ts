import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жариться: PerfectVerb = {
  name: Word('жариться', 1),
  singular1stPerson: Word('жарюсь', 1),
  singular2ndPerson: Word('жаришься', 1),
  singular3rdPerson: Word('жарится', 1),
  plural1stPerson: Word('жаримся', 1),
  plural2ndPerson: Word('жаритесь', 1),
  plural3rdPerson: Word('жарятся', 1),
  masculinePast: Word('жарился', 1),
  femininePast: Word('жарилась', 1),
  neuterPast: Word('жарилось', 1),
  pluralPast: Word('жарились', 1),
  imperativeInformal: Word('жарься', 1),
  imperativeFormal: Word('жарьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(жариться.name.text, жариться);

export { жариться };