import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгладить: PerfectVerb = {
  name: Word('отгладить', 4),
  singular1stPerson: Word('отглажу', 4),
  singular2ndPerson: Word('отгладишь', 4),
  singular3rdPerson: Word('отгладит', 4),
  plural1stPerson: Word('отгладим', 4),
  plural2ndPerson: Word('отгладите', 4),
  plural3rdPerson: Word('отгладят', 4),
  masculinePast: Word('отгладил', 4),
  femininePast: Word('отгладила', 4),
  neuterPast: Word('отгладило', 4),
  pluralPast: Word('отгладили', 4),
  imperativeInformal: Word('отгладь', 4),
  imperativeFormal: Word('отгладьте', 4),
  imperfect: [],
};

perfectVerbs.set(отгладить.name.text, отгладить);

export { отгладить };