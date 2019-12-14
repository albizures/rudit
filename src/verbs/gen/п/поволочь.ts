import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поволочь: PerfectVerb = {
  name: Word('поволочь', 5),
  singular1stPerson: Word('поволоку', 7),
  singular2ndPerson: Word('поволочёшь', 7),
  singular3rdPerson: Word('поволочёт', 7),
  plural1stPerson: Word('поволочём', 7),
  plural2ndPerson: Word('поволочёте', 7),
  plural3rdPerson: Word('поволокут', 7),
  masculinePast: Word('поволок', 5),
  femininePast: Word('поволокла', 8),
  neuterPast: Word('поволокло', 8),
  pluralPast: Word('поволокли', 8),
  imperativeInformal: Word('поволоки', 7),
  imperativeFormal: Word('поволоките', 7),
  imperfect: [],
};

perfectVerbs.set(поволочь.name.text, поволочь);

export { поволочь };