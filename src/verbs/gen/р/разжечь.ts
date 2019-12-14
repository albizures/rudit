import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжечь: PerfectVerb = {
  name: Word('разжечь', 4),
  singular1stPerson: Word('разожгу', 6),
  singular2ndPerson: Word('разожжёшь', 6),
  singular3rdPerson: Word('разожжёт', 6),
  plural1stPerson: Word('разожжём', 6),
  plural2ndPerson: Word('разожжёте', 6),
  plural3rdPerson: Word('разожгут', 6),
  masculinePast: Word('разжёг', 4),
  femininePast: Word('разожгла', 7),
  neuterPast: Word('разожгло', 7),
  pluralPast: Word('разожгли', 7),
  imperativeInformal: Word('разожги', 6),
  imperativeFormal: Word('разожгите', 6),
  imperfect: [],
};

perfectVerbs.set(разжечь.name.text, разжечь);

export { разжечь };