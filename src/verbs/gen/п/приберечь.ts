import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приберечь: PerfectVerb = {
  name: Word('приберечь', 6),
  singular1stPerson: Word('приберегу', 8),
  singular2ndPerson: Word('прибережёшь', 4),
  singular3rdPerson: Word('прибережёт', 4),
  plural1stPerson: Word('прибережём', 4),
  plural2ndPerson: Word('прибережёте', 4),
  plural3rdPerson: Word('приберегут', 8),
  masculinePast: Word('приберег', 6),
  femininePast: Word('приберегла', 9),
  neuterPast: Word('приберегло', 9),
  pluralPast: Word('приберегли', 9),
  imperativeInformal: Word('прибереги', 8),
  imperativeFormal: Word('приберегите', 8),
  imperfect: [],
};

perfectVerbs.set(приберечь.name.text, приберечь);

export { приберечь };