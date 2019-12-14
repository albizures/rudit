import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожечь: PerfectVerb = {
  name: Word('ожечь', 2),
  singular1stPerson: Word('ожгу', 3),
  singular2ndPerson: Word('ожжёшь', 3),
  singular3rdPerson: Word('ожжёт', 3),
  plural1stPerson: Word('ожжём', 3),
  plural2ndPerson: Word('ожжёте', 3),
  plural3rdPerson: Word('ожгут', 3),
  masculinePast: Word('ожёг', 2),
  femininePast: Word('ожгла', 4),
  neuterPast: Word('ожгло', 4),
  pluralPast: Word('ожгли', 4),
  imperativeInformal: Word('ожги', 3),
  imperativeFormal: Word('ожгите', 3),
  imperfect: [],
};

perfectVerbs.set(ожечь.name.text, ожечь);

export { ожечь };