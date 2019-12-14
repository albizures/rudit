import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгладить: PerfectVerb = {
  name: Word('разгладить', 5),
  singular1stPerson: Word('разглажу', 5),
  singular2ndPerson: Word('разгладишь', 5),
  singular3rdPerson: Word('разгладит', 5),
  plural1stPerson: Word('разгладим', 5),
  plural2ndPerson: Word('разгладите', 5),
  plural3rdPerson: Word('разгладят', 5),
  masculinePast: Word('разгладил', 5),
  femininePast: Word('разгладила', 5),
  neuterPast: Word('разгладило', 5),
  pluralPast: Word('разгладили', 5),
  imperativeInformal: Word('разгладь', 5),
  imperativeFormal: Word('разгладьте', 5),
  imperfect: [],
};

perfectVerbs.set(разгладить.name.text, разгладить);

export { разгладить };