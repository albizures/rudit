import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огладить: PerfectVerb = {
  name: Word('огладить', 3),
  singular1stPerson: Word('оглажу', 3),
  singular2ndPerson: Word('огладишь', 3),
  singular3rdPerson: Word('огладит', 3),
  plural1stPerson: Word('огладим', 3),
  plural2ndPerson: Word('огладите', 3),
  plural3rdPerson: Word('огладят', 3),
  masculinePast: Word('огладил', 3),
  femininePast: Word('огладила', 3),
  neuterPast: Word('огладило', 3),
  pluralPast: Word('огладили', 3),
  imperativeInformal: Word('огладь', 3),
  imperativeFormal: Word('огладьте', 3),
  imperfect: [],
};

perfectVerbs.set(огладить.name.text, огладить);

export { огладить };