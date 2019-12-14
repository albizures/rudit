import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const честь: PerfectVerb = {
  name: Word('честь', 1),
  singular1stPerson: Word('чту', 2),
  singular2ndPerson: Word('чтёшь', 2),
  singular3rdPerson: Word('чтёт', 2),
  plural1stPerson: Word('чтём', 2),
  plural2ndPerson: Word('чтёте', 2),
  plural3rdPerson: Word('чтут', 2),
  masculinePast: Word('чёл', 1),
  femininePast: Word('чла', 2),
  neuterPast: Word('чло', 2),
  pluralPast: Word('чли', 2),
  imperativeInformal: Word('чти', 2),
  imperativeFormal: Word('чтите', 2),
  imperfect: ['прочесть'],
};

perfectVerbs.set(честь.name.text, честь);

export { честь };