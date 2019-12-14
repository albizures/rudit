import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насытить: PerfectVerb = {
  name: Word('насытить', 3),
  singular1stPerson: Word('насыщу', 3),
  singular2ndPerson: Word('насытишь', 3),
  singular3rdPerson: Word('насытит', 3),
  plural1stPerson: Word('насытим', 3),
  plural2ndPerson: Word('насытите', 3),
  plural3rdPerson: Word('насытят', 3),
  masculinePast: Word('насытил', 3),
  femininePast: Word('насытила', 3),
  neuterPast: Word('насытило', 3),
  pluralPast: Word('насытили', 3),
  imperativeInformal: Word('насыть', 3),
  imperativeFormal: Word('насытьте', 3),
  imperfect: [],
};

perfectVerbs.set(насытить.name.text, насытить);

export { насытить };