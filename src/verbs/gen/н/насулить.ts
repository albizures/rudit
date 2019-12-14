import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насулить: PerfectVerb = {
  name: Word('насулить', 3),
  singular1stPerson: Word('насулю', 5),
  singular2ndPerson: Word('насулишь', 5),
  singular3rdPerson: Word('насулит', 5),
  plural1stPerson: Word('насулим', 5),
  plural2ndPerson: Word('насулите', 5),
  plural3rdPerson: Word('насулят', 5),
  masculinePast: Word('насулил', 3),
  femininePast: Word('насулила', 3),
  neuterPast: Word('насулило', 3),
  pluralPast: Word('насулили', 3),
  imperativeInformal: Word('насули', 5),
  imperativeFormal: Word('насулите', 5),
  imperfect: [],
};

perfectVerbs.set(насулить.name.text, насулить);

export { насулить };