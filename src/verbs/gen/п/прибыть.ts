import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибыть: PerfectVerb = {
  name: Word('прибыть', 4),
  singular1stPerson: Word('прибуду', 4),
  singular2ndPerson: Word('прибудешь', 4),
  singular3rdPerson: Word('прибудет', 4),
  plural1stPerson: Word('прибудем', 4),
  plural2ndPerson: Word('прибудете', 4),
  plural3rdPerson: Word('прибудут', 4),
  masculinePast: Word('прибыл', 2),
  femininePast: Word('прибыла', 6),
  neuterPast: Word('прибыло,при'было', 4),
  pluralPast: Word('прибыли,при'были', 4),
  imperativeInformal: Word('прибудь', 4),
  imperativeFormal: Word('прибудьте', 4),
  imperfect: ['прибывать'],
};

perfectVerbs.set(прибыть.name.text, прибыть);

export { прибыть };