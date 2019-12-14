import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сладить: PerfectVerb = {
  name: Word('сладить', 2),
  singular1stPerson: Word('слажу', 2),
  singular2ndPerson: Word('сладишь', 2),
  singular3rdPerson: Word('сладит', 2),
  plural1stPerson: Word('сладим', 2),
  plural2ndPerson: Word('сладите', 2),
  plural3rdPerson: Word('сладят', 2),
  masculinePast: Word('сладил', 2),
  femininePast: Word('сладила', 2),
  neuterPast: Word('сладило', 2),
  pluralPast: Word('сладили', 2),
  imperativeInformal: Word('сладь', 2),
  imperativeFormal: Word('сладьте', 2),
  imperfect: [],
};

perfectVerbs.set(сладить.name.text, сладить);

export { сладить };