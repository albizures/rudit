import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прижечь: PerfectVerb = {
  name: Word('прижечь', 4),
  singular1stPerson: Word('прижгу', 5),
  singular2ndPerson: Word('прижжёшь', 2),
  singular3rdPerson: Word('прижжёт', 2),
  plural1stPerson: Word('прижжём', 2),
  plural2ndPerson: Word('прижжёте', 7),
  plural3rdPerson: Word('прижгут', 5),
  masculinePast: Word('прижёг', 2),
  femininePast: Word('прижгла', 6),
  neuterPast: Word('прижгло', 6),
  pluralPast: Word('прижгли', 6),
  imperativeInformal: Word('прижги', 5),
  imperativeFormal: Word('прижгите', 5),
  imperfect: [],
};

perfectVerbs.set(прижечь.name.text, прижечь);

export { прижечь };