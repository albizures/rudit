import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскрыть: PerfectVerb = {
  name: Word('вскрыть', 4),
  singular1stPerson: Word('вскрою', 4),
  singular2ndPerson: Word('вскроешь', 4),
  singular3rdPerson: Word('вскроет', 4),
  plural1stPerson: Word('вскроем', 4),
  plural2ndPerson: Word('вскроете', 4),
  plural3rdPerson: Word('вскроют', 4),
  masculinePast: Word('вскрыл', 4),
  femininePast: Word('вскрыла', 4),
  neuterPast: Word('вскрыло', 4),
  pluralPast: Word('вскрыли', 4),
  imperativeInformal: Word('вскрой', 4),
  imperativeFormal: Word('вскройте', 4),
  imperfect: ['вскрывать'],
};

perfectVerbs.set(вскрыть.name.text, вскрыть);

export { вскрыть };