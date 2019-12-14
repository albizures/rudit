import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пережечь: PerfectVerb = {
  name: Word('пережечь', 5),
  singular1stPerson: Word('пережгу', 6),
  singular2ndPerson: Word('пережжёшь', 6),
  singular3rdPerson: Word('пережжёт', 6),
  plural1stPerson: Word('пережжём', 6),
  plural2ndPerson: Word('пережжёте', 6),
  plural3rdPerson: Word('пережгут', 6),
  masculinePast: Word('пережёг', 5),
  femininePast: Word('пережгла', 7),
  neuterPast: Word('пережгло', 7),
  pluralPast: Word('пережгли', 7),
  imperativeInformal: Word('пережги', 6),
  imperativeFormal: Word('пережгите', 6),
  imperfect: [],
};

perfectVerbs.set(пережечь.name.text, пережечь);

export { пережечь };