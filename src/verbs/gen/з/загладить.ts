import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загладить: PerfectVerb = {
  name: Word('загладить', 4),
  singular1stPerson: Word('заглажу', 4),
  singular2ndPerson: Word('загладишь', 4),
  singular3rdPerson: Word('загладит', 4),
  plural1stPerson: Word('загладим', 4),
  plural2ndPerson: Word('загладите', 4),
  plural3rdPerson: Word('загладят', 4),
  masculinePast: Word('загладил', 4),
  femininePast: Word('загладила', 4),
  neuterPast: Word('загладило', 4),
  pluralPast: Word('загладили', 4),
  imperativeInformal: Word('загладь', 4),
  imperativeFormal: Word('загладьте', 4),
  imperfect: [],
};

perfectVerbs.set(загладить.name.text, загладить);

export { загладить };