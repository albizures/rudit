import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжечь: PerfectVerb = {
  name: Word('обжечь', 3),
  singular1stPerson: Word('обожгу', 5),
  singular2ndPerson: Word('обожжёшь', 0),
  singular3rdPerson: Word('обожжёт', 0),
  plural1stPerson: Word('обожжём', 0),
  plural2ndPerson: Word('обожжёте', 7),
  plural3rdPerson: Word('обожгут', 5),
  masculinePast: Word('обжёг', 0),
  femininePast: Word('обожгла', 6),
  neuterPast: Word('обожгло', 6),
  pluralPast: Word('обожгли', 6),
  imperativeInformal: Word('обожги', 5),
  imperativeFormal: Word('обожгите', 5),
  imperfect: [],
};

perfectVerbs.set(обжечь.name.text, обжечь);

export { обжечь };