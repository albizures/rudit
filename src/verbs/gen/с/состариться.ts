import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состариться: PerfectVerb = {
  name: Word('состариться', 4),
  singular1stPerson: Word('состарюсь', 4),
  singular2ndPerson: Word('состаришься', 4),
  singular3rdPerson: Word('состарится', 4),
  plural1stPerson: Word('состаримся', 4),
  plural2ndPerson: Word('состаритесь', 4),
  plural3rdPerson: Word('состарятся', 4),
  masculinePast: Word('состарился', 4),
  femininePast: Word('состарилась', 4),
  neuterPast: Word('состарилось', 4),
  pluralPast: Word('состарились', 4),
  imperativeInformal: Word('состарься', 4),
  imperativeFormal: Word('состарьтесь', 4),
  imperfect: ['стариться'],
};

perfectVerbs.set(состариться.name.text, состариться);

export { состариться };