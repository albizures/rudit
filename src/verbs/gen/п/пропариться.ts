import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропариться: PerfectVerb = {
  name: Word('пропариться', 4),
  singular1stPerson: Word('пропарюсь', 4),
  singular2ndPerson: Word('пропаришься', 4),
  singular3rdPerson: Word('пропарится', 4),
  plural1stPerson: Word('пропаримся', 4),
  plural2ndPerson: Word('пропаритесь', 4),
  plural3rdPerson: Word('пропарятся', 4),
  masculinePast: Word('пропарился', 4),
  femininePast: Word('пропарилась', 4),
  neuterPast: Word('пропарилось', 4),
  pluralPast: Word('пропарились', 4),
  imperativeInformal: Word('пропарься', 4),
  imperativeFormal: Word('пропарьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пропариться.name.text, пропариться);

export { пропариться };