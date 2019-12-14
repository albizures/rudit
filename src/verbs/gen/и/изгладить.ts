import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгладить: PerfectVerb = {
  name: Word('изгладить', 4),
  singular1stPerson: Word('изглажу', 4),
  singular2ndPerson: Word('изгладишь', 4),
  singular3rdPerson: Word('изгладит', 4),
  plural1stPerson: Word('изгладим', 4),
  plural2ndPerson: Word('изгладите', 4),
  plural3rdPerson: Word('изгладят', 4),
  masculinePast: Word('изгладил', 4),
  femininePast: Word('изгладила', 4),
  neuterPast: Word('изгладило', 4),
  pluralPast: Word('изгладили', 4),
  imperativeInformal: Word('изгладь', 4),
  imperativeFormal: Word('изгладьте', 4),
  imperfect: [],
};

perfectVerbs.set(изгладить.name.text, изгладить);

export { изгладить };