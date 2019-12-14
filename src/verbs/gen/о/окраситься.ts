import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окраситься: PerfectVerb = {
  name: Word('окраситься', 3),
  singular1stPerson: Word('окрашусь', 3),
  singular2ndPerson: Word('окрасишься', 3),
  singular3rdPerson: Word('окрасится', 3),
  plural1stPerson: Word('окрасимся', 3),
  plural2ndPerson: Word('окраситесь', 3),
  plural3rdPerson: Word('окрасятся', 3),
  masculinePast: Word('окрасился', 3),
  femininePast: Word('окрасилась', 3),
  neuterPast: Word('окрасилось', 3),
  pluralPast: Word('окрасились', 3),
  imperativeInformal: Word('окрасься', 3),
  imperativeFormal: Word('окрасьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(окраситься.name.text, окраситься);

export { окраситься };