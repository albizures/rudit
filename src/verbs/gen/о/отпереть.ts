import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпереть: PerfectVerb = {
  name: Word('отпереть', 5),
  singular1stPerson: Word('отопру', 5),
  singular2ndPerson: Word('отопрёшь', 5),
  singular3rdPerson: Word('отопрёт', 5),
  plural1stPerson: Word('отопрём', 5),
  plural2ndPerson: Word('отопрёте', 5),
  plural3rdPerson: Word('отопрут', 5),
  masculinePast: Word('отпер', 0),
  femininePast: Word('отперла', 6),
  neuterPast: Word('отперло', 0),
  pluralPast: Word('отперли', 0),
  imperativeInformal: Word('отопри', 5),
  imperativeFormal: Word('отоприте', 5),
  imperfect: [],
};

perfectVerbs.set(отпереть.name.text, отпереть);

export { отпереть };