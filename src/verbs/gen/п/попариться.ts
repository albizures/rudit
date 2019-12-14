import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попариться: PerfectVerb = {
  name: Word('попариться', 3),
  singular1stPerson: Word('попарюсь', 3),
  singular2ndPerson: Word('попаришься', 3),
  singular3rdPerson: Word('попарится', 3),
  plural1stPerson: Word('попаримся', 3),
  plural2ndPerson: Word('попаритесь', 3),
  plural3rdPerson: Word('попарятся', 3),
  masculinePast: Word('попарился', 3),
  femininePast: Word('попарилась', 3),
  neuterPast: Word('попарилось', 3),
  pluralPast: Word('попарились', 3),
  imperativeInformal: Word('попарься', 3),
  imperativeFormal: Word('попарьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(попариться.name.text, попариться);

export { попариться };