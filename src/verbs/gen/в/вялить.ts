import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вялить: PerfectVerb = {
  name: Word('вялить', 1),
  singular1stPerson: Word('вялю', 1),
  singular2ndPerson: Word('вялишь', 1),
  singular3rdPerson: Word('вялит', 1),
  plural1stPerson: Word('вялим', 1),
  plural2ndPerson: Word('вялите', 1),
  plural3rdPerson: Word('вялят', 1),
  masculinePast: Word('вялил', 1),
  femininePast: Word('вялила', 1),
  neuterPast: Word('вялило', 1),
  pluralPast: Word('вялили', 1),
  imperativeInformal: Word('вяль', 1),
  imperativeFormal: Word('вяльте', 1),
  imperfect: [],
};

perfectVerbs.set(вялить.name.text, вялить);

export { вялить };