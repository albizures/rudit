import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уволочь: PerfectVerb = {
  name: Word('уволочь', 4),
  singular1stPerson: Word('уволоку', 6),
  singular2ndPerson: Word('уволочёшь', 2),
  singular3rdPerson: Word('уволочёт', 2),
  plural1stPerson: Word('уволочём', 2),
  plural2ndPerson: Word('уволочёте', 8),
  plural3rdPerson: Word('уволокут', 6),
  masculinePast: Word('уволок', 4),
  femininePast: Word('уволокла', 7),
  neuterPast: Word('уволокло', 7),
  pluralPast: Word('уволокли', 7),
  imperativeInformal: Word('уволоки', 6),
  imperativeFormal: Word('уволоките', 6),
  imperfect: [],
};

perfectVerbs.set(уволочь.name.text, уволочь);

export { уволочь };