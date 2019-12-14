import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насупить: PerfectVerb = {
  name: Word('насупить', 3),
  singular1stPerson: Word('насуплю', 3),
  singular2ndPerson: Word('насупишь', 3),
  singular3rdPerson: Word('насупит', 3),
  plural1stPerson: Word('насупим', 3),
  plural2ndPerson: Word('насупите', 3),
  plural3rdPerson: Word('насупят', 3),
  masculinePast: Word('насупил', 3),
  femininePast: Word('насупила', 3),
  neuterPast: Word('насупило', 3),
  pluralPast: Word('насупили', 3),
  imperativeInformal: Word('насупь', 3),
  imperativeFormal: Word('насупьте', 3),
  imperfect: [],
};

perfectVerbs.set(насупить.name.text, насупить);

export { насупить };