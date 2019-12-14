import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрыть: PerfectVerb = {
  name: Word('раскрыть', 5),
  singular1stPerson: Word('раскрою', 5),
  singular2ndPerson: Word('раскроешь', 5),
  singular3rdPerson: Word('раскроет', 5),
  plural1stPerson: Word('раскроем', 5),
  plural2ndPerson: Word('раскроете', 5),
  plural3rdPerson: Word('раскроют', 5),
  masculinePast: Word('раскрыл', 5),
  femininePast: Word('раскрыла', 5),
  neuterPast: Word('раскрыло', 5),
  pluralPast: Word('раскрыли', 5),
  imperativeInformal: Word('раскрой', 5),
  imperativeFormal: Word('раскройте', 5),
  imperfect: ['раскрывать'],
};

perfectVerbs.set(раскрыть.name.text, раскрыть);

export { раскрыть };