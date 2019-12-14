import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожечь: PerfectVerb = {
  name: Word('прожечь', 4),
  singular1stPerson: Word('прожгу', 5),
  singular2ndPerson: Word('прожжёшь', 5),
  singular3rdPerson: Word('прожжёт', 5),
  plural1stPerson: Word('прожжём', 5),
  plural2ndPerson: Word('прожжёте', 5),
  plural3rdPerson: Word('прожгут', 5),
  masculinePast: Word('прожёг', 4),
  femininePast: Word('прожгла', 6),
  neuterPast: Word('прожгло', 6),
  pluralPast: Word('прожгли', 6),
  imperativeInformal: Word('прожги', 5),
  imperativeFormal: Word('прожгите', 5),
  imperfect: [],
};

perfectVerbs.set(прожечь.name.text, прожечь);

export { прожечь };