import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распотрошить: PerfectVerb = {
  name: Word('распотрошить', 9),
  singular1stPerson: Word('распотрошу', 9),
  singular2ndPerson: Word('распотрошишь', 9),
  singular3rdPerson: Word('распотрошит', 9),
  plural1stPerson: Word('распотрошим', 9),
  plural2ndPerson: Word('распотрошите', 9),
  plural3rdPerson: Word('распотрошат', 9),
  masculinePast: Word('распотрошил', 9),
  femininePast: Word('распотрошила', 9),
  neuterPast: Word('распотрошило', 9),
  pluralPast: Word('распотрошили', 9),
  imperativeInformal: Word('распотроши', 9),
  imperativeFormal: Word('распотрошите', 9),
  imperfect: [],
};

perfectVerbs.set(распотрошить.name.text, распотрошить);

export { распотрошить };