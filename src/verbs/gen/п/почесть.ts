import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почесть: PerfectVerb = {
  name: Word('почесть', 3),
  singular1stPerson: Word('почту', 4),
  singular2ndPerson: Word('почтёшь', 1),
  singular3rdPerson: Word('почтёт', 1),
  plural1stPerson: Word('почтём', 1),
  plural2ndPerson: Word('почтёте', 6),
  plural3rdPerson: Word('почтут', 4),
  masculinePast: Word('почёл', 1),
  femininePast: Word('почла', 4),
  neuterPast: Word('почло', 4),
  pluralPast: Word('почли', 4),
  imperativeInformal: Word('почти', 4),
  imperativeFormal: Word('почтите', 4),
  imperfect: [],
};

perfectVerbs.set(почесть.name.text, почесть);

export { почесть };