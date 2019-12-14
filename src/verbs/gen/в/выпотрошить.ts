import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпотрошить: PerfectVerb = {
  name: Word('выпотрошить', 1),
  singular1stPerson: Word('выпотрошу', 1),
  singular2ndPerson: Word('выпотрошишь', 1),
  singular3rdPerson: Word('выпотрошит', 1),
  plural1stPerson: Word('выпотрошим', 1),
  plural2ndPerson: Word('выпотрошите', 1),
  plural3rdPerson: Word('выпотрошат', 1),
  masculinePast: Word('выпотрошил', 1),
  femininePast: Word('выпотрошила', 1),
  neuterPast: Word('выпотрошило', 1),
  pluralPast: Word('выпотрошили', 1),
  imperativeInformal: Word('выпотроши', 1),
  imperativeFormal: Word('выпотрошите', 1),
  imperfect: [],
};

perfectVerbs.set(выпотрошить.name.text, выпотрошить);

export { выпотрошить };