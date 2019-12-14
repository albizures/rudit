import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычислить: PerfectVerb = {
  name: Word('вычислить', 1),
  singular1stPerson: Word('вычислю', 1),
  singular2ndPerson: Word('вычислишь', 1),
  singular3rdPerson: Word('вычислит', 1),
  plural1stPerson: Word('вычислим', 1),
  plural2ndPerson: Word('вычислите', 1),
  plural3rdPerson: Word('вычислят', 1),
  masculinePast: Word('вычислил', 1),
  femininePast: Word('вычислила', 1),
  neuterPast: Word('вычислило', 1),
  pluralPast: Word('вычислили', 1),
  imperativeInformal: Word('вычисли', 1),
  imperativeFormal: Word('вычислите', 1),
  imperfect: [],
};

perfectVerbs.set(вычислить.name.text, вычислить);

export { вычислить };