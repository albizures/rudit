import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возжечь: PerfectVerb = {
  name: Word('возжечь', 4),
  singular1stPerson: Word('возжгу', 5),
  singular2ndPerson: Word('возжжёшь', 1),
  singular3rdPerson: Word('возжжёт', 1),
  plural1stPerson: Word('возжжём', 1),
  plural2ndPerson: Word('возжжёте', 7),
  plural3rdPerson: Word('возжгут', 5),
  masculinePast: Word('возжёг', 1),
  femininePast: Word('возжгла', 6),
  neuterPast: Word('возжгло', 6),
  pluralPast: Word('возжгли', 6),
  imperativeInformal: Word('возжги', 5),
  imperativeFormal: Word('возжгите', 5),
  imperfect: [],
};

perfectVerbs.set(возжечь.name.text, возжечь);

export { возжечь };