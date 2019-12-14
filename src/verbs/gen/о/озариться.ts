import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озариться: PerfectVerb = {
  name: Word('озариться', 4),
  singular1stPerson: Word('озарюсь', 4),
  singular2ndPerson: Word('озаришься', 4),
  singular3rdPerson: Word('озарится', 4),
  plural1stPerson: Word('озаримся', 4),
  plural2ndPerson: Word('озаритесь', 4),
  plural3rdPerson: Word('озарятся', 4),
  masculinePast: Word('озарился', 4),
  femininePast: Word('озарилась', 4),
  neuterPast: Word('озарилось', 4),
  pluralPast: Word('озарились', 4),
  imperativeInformal: Word('озарись', 4),
  imperativeFormal: Word('озаритесь', 4),
  imperfect: [],
};

perfectVerbs.set(озариться.name.text, озариться);

export { озариться };