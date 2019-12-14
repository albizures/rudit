import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрыситься: PerfectVerb = {
  name: Word('окрыситься', 3),
  singular1stPerson: Word('окрышусь', 3),
  singular2ndPerson: Word('окрысишься', 3),
  singular3rdPerson: Word('окрысится', 3),
  plural1stPerson: Word('окрысимся', 3),
  plural2ndPerson: Word('окрыситесь', 3),
  plural3rdPerson: Word('окрысятся', 3),
  masculinePast: Word('окрысился', 3),
  femininePast: Word('окрысилась', 3),
  neuterPast: Word('окрысилось', 3),
  pluralPast: Word('окрысились', 3),
  imperativeInformal: Word('окрысься', 3),
  imperativeFormal: Word('окрысьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(окрыситься.name.text, окрыситься);

export { окрыситься };