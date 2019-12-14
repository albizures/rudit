import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджечь: PerfectVerb = {
  name: Word('поджечь', 4),
  singular1stPerson: Word('подожгу', 6),
  singular2ndPerson: Word('подожжёшь', 6),
  singular3rdPerson: Word('подожжёт', 6),
  plural1stPerson: Word('подожжём', 6),
  plural2ndPerson: Word('подожжёте', 6),
  plural3rdPerson: Word('подожгут', 6),
  masculinePast: Word('поджёг', 4),
  femininePast: Word('подожгла', 7),
  neuterPast: Word('подожгло', 7),
  pluralPast: Word('подожгли', 7),
  imperativeInformal: Word('подожги', 6),
  imperativeFormal: Word('подожгите', 6),
  imperfect: ['поджигать'],
};

perfectVerbs.set(поджечь.name.text, поджечь);

export { поджечь };