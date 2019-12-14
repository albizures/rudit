import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разладить: PerfectVerb = {
  name: Word('разладить', 4),
  singular1stPerson: Word('разлажу', 4),
  singular2ndPerson: Word('разладишь', 4),
  singular3rdPerson: Word('разладит', 4),
  plural1stPerson: Word('разладим', 4),
  plural2ndPerson: Word('разладите', 4),
  plural3rdPerson: Word('разладят', 4),
  masculinePast: Word('разладил', 4),
  femininePast: Word('разладила', 4),
  neuterPast: Word('разладило', 4),
  pluralPast: Word('разладили', 4),
  imperativeInformal: Word('разладь', 4),
  imperativeFormal: Word('разладьте', 4),
  imperfect: [],
};

perfectVerbs.set(разладить.name.text, разладить);

export { разладить };