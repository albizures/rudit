import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгладить: PerfectVerb = {
  name: Word('сгладить', 3),
  singular1stPerson: Word('сглажу', 3),
  singular2ndPerson: Word('сгладишь', 3),
  singular3rdPerson: Word('сгладит', 3),
  plural1stPerson: Word('сгладим', 3),
  plural2ndPerson: Word('сгладите', 3),
  plural3rdPerson: Word('сгладят', 3),
  masculinePast: Word('сгладил', 3),
  femininePast: Word('сгладила', 3),
  neuterPast: Word('сгладило', 3),
  pluralPast: Word('сгладили', 3),
  imperativeInformal: Word('сгладь', 3),
  imperativeFormal: Word('сгладьте', 3),
  imperfect: [],
};

perfectVerbs.set(сгладить.name.text, сгладить);

export { сгладить };