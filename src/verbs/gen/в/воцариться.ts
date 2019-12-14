import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воцариться: PerfectVerb = {
  name: Word('воцариться', 5),
  singular1stPerson: Word('воцарюсь', 5),
  singular2ndPerson: Word('воцаришься', 5),
  singular3rdPerson: Word('воцарится', 5),
  plural1stPerson: Word('воцаримся', 5),
  plural2ndPerson: Word('воцаритесь', 5),
  plural3rdPerson: Word('воцарятся', 5),
  masculinePast: Word('воцарился', 5),
  femininePast: Word('воцарилась', 5),
  neuterPast: Word('воцарилось', 5),
  pluralPast: Word('воцарились', 5),
  imperativeInformal: Word('воцарись', 5),
  imperativeFormal: Word('воцаритесь', 5),
  imperfect: [],
};

perfectVerbs.set(воцариться.name.text, воцариться);

export { воцариться };