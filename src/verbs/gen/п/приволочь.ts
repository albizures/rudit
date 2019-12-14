import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приволочь: PerfectVerb = {
  name: Word('приволочь', 6),
  singular1stPerson: Word('приволоку', 8),
  singular2ndPerson: Word('приволочёшь', 2),
  singular3rdPerson: Word('приволочёт', 2),
  plural1stPerson: Word('приволочём', 2),
  plural2ndPerson: Word('приволочёте', 10),
  plural3rdPerson: Word('приволокут', 8),
  masculinePast: Word('приволок', 6),
  femininePast: Word('приволокла', 9),
  neuterPast: Word('приволокло', 9),
  pluralPast: Word('приволокли', 9),
  imperativeInformal: Word('приволоки', 8),
  imperativeFormal: Word('приволоките', 8),
  imperfect: [],
};

perfectVerbs.set(приволочь.name.text, приволочь);

export { приволочь };