import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окатить: PerfectVerb = {
  name: Word('окатить', 4),
  singular1stPerson: Word('окачу', 4),
  singular2ndPerson: Word('окатишь', 2),
  singular3rdPerson: Word('окатит', 2),
  plural1stPerson: Word('окатим', 2),
  plural2ndPerson: Word('окатите', 2),
  plural3rdPerson: Word('окатят', 2),
  masculinePast: Word('окатил', 4),
  femininePast: Word('окатила', 4),
  neuterPast: Word('окатило', 4),
  pluralPast: Word('окатили', 4),
  imperativeInformal: Word('окати', 4),
  imperativeFormal: Word('окатите', 4),
  imperfect: [],
};

perfectVerbs.set(окатить.name.text, окатить);

export { окатить };