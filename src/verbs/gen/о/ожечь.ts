import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ожечь: PerfectVerb = {
  name: Word('ожечь', 2),
  singular1stPerson: Word('ожгу', 3),
  singular2ndPerson: Word('ожжёшь', 0),
  singular3rdPerson: Word('ожжёт', 0),
  plural1stPerson: Word('ожжём', 0),
  plural2ndPerson: Word('ожжёте', 5),
  plural3rdPerson: Word('ожгут', 3),
  masculinePast: Word('ожёг', 0),
  femininePast: Word('ожгла', 4),
  neuterPast: Word('ожгло', 4),
  pluralPast: Word('ожгли', 4),
  imperativeInformal: Word('ожги', 3),
  imperativeFormal: Word('ожгите', 3),
  imperfect: [],
};

perfectVerbs.set(ожечь.name.text, ожечь);

export { ожечь };