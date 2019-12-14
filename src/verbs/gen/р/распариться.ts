import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распариться: PerfectVerb = {
  name: Word('распариться', 4),
  singular1stPerson: Word('распарюсь', 4),
  singular2ndPerson: Word('распаришься', 4),
  singular3rdPerson: Word('распарится', 4),
  plural1stPerson: Word('распаримся', 4),
  plural2ndPerson: Word('распаритесь', 4),
  plural3rdPerson: Word('распарятся', 4),
  masculinePast: Word('распарился', 4),
  femininePast: Word('распарилась', 4),
  neuterPast: Word('распарилось', 4),
  pluralPast: Word('распарились', 4),
  imperativeInformal: Word('распарься', 4),
  imperativeFormal: Word('распарьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распариться.name.text, распариться);

export { распариться };