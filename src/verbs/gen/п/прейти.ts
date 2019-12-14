import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прейти: PerfectVerb = {
  name: Word('прейти', 5),
  singular1stPerson: Word('прейду', 5),
  singular2ndPerson: Word('прейдёшь', 2),
  singular3rdPerson: Word('прейдёт', 2),
  plural1stPerson: Word('прейдём', 2),
  plural2ndPerson: Word('прейдёте', 2),
  plural3rdPerson: Word('прейдут', 5),
  masculinePast: Word('прешёл', 2),
  femininePast: Word('прешла', 5),
  neuterPast: Word('прешло', 5),
  pluralPast: Word('прешли', 5),
  imperativeInformal: Word('прейди', 5),
  imperativeFormal: Word('прейдите', 5),
  imperfect: [],
};

perfectVerbs.set(прейти.name.text, прейти);

export { прейти };