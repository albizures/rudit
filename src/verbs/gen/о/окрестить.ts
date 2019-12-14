import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрестить: PerfectVerb = {
  name: Word('окрестить', 6),
  singular1stPerson: Word('окрещу', 5),
  singular2ndPerson: Word('окрестишь', 3),
  singular3rdPerson: Word('окрестит', 3),
  plural1stPerson: Word('окрестим', 3),
  plural2ndPerson: Word('окрестите', 3),
  plural3rdPerson: Word('окрестят', 3),
  masculinePast: Word('окрестил', 6),
  femininePast: Word('окрестила', 6),
  neuterPast: Word('окрестило', 6),
  pluralPast: Word('окрестили', 6),
  imperativeInformal: Word('окрести', 6),
  imperativeFormal: Word('окрестите', 6),
  imperfect: [],
};

perfectVerbs.set(окрестить.name.text, окрестить);

export { окрестить };