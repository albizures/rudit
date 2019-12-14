import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окреститься: PerfectVerb = {
  name: Word('окреститься', 6),
  singular1stPerson: Word('окрещусь', 5),
  singular2ndPerson: Word('окрестишься', 3),
  singular3rdPerson: Word('окрестится', 3),
  plural1stPerson: Word('окрестимся', 3),
  plural2ndPerson: Word('окреститесь', 3),
  plural3rdPerson: Word('окрестятся', 3),
  masculinePast: Word('окрестился', 6),
  femininePast: Word('окрестилась', 6),
  neuterPast: Word('окрестилось', 6),
  pluralPast: Word('окрестились', 6),
  imperativeInformal: Word('окрестись', 6),
  imperativeFormal: Word('окреститесь', 6),
  imperfect: [],
};

perfectVerbs.set(окреститься.name.text, окреститься);

export { окреститься };