import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагладить: PerfectVerb = {
  name: Word('нагладить', 4),
  singular1stPerson: Word('наглажу', 4),
  singular2ndPerson: Word('нагладишь', 4),
  singular3rdPerson: Word('нагладит', 4),
  plural1stPerson: Word('нагладим', 4),
  plural2ndPerson: Word('нагладите', 4),
  plural3rdPerson: Word('нагладят', 4),
  masculinePast: Word('нагладил', 4),
  femininePast: Word('нагладила', 4),
  neuterPast: Word('нагладило', 4),
  pluralPast: Word('нагладили', 4),
  imperativeInformal: Word('нагладь', 4),
  imperativeFormal: Word('нагладьте', 4),
  imperfect: [],
};

perfectVerbs.set(нагладить.name.text, нагладить);

export { нагладить };