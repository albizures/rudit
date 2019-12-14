import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажариться: PerfectVerb = {
  name: Word('зажариться', 3),
  singular1stPerson: Word('зажарюсь', 3),
  singular2ndPerson: Word('зажаришься', 3),
  singular3rdPerson: Word('зажарится', 3),
  plural1stPerson: Word('зажаримся', 3),
  plural2ndPerson: Word('зажаритесь', 3),
  plural3rdPerson: Word('зажарятся', 3),
  masculinePast: Word('зажарился', 3),
  femininePast: Word('зажарилась', 3),
  neuterPast: Word('зажарилось', 3),
  pluralPast: Word('зажарились', 3),
  imperativeInformal: Word('зажарься', 3),
  imperativeFormal: Word('зажарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(зажариться.name.text, зажариться);

export { зажариться };