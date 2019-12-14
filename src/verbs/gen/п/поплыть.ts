import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплыть: PerfectVerb = {
  name: Word('поплыть', 4),
  singular1stPerson: Word('поплыву', 6),
  singular2ndPerson: Word('поплывёшь', 6),
  singular3rdPerson: Word('поплывёт', 6),
  plural1stPerson: Word('поплывём', 6),
  plural2ndPerson: Word('поплывёте', 6),
  plural3rdPerson: Word('поплывут', 6),
  masculinePast: Word('поплыл', 4),
  femininePast: Word('поплыла', 6),
  neuterPast: Word('поплыло', 4),
  pluralPast: Word('поплыли', 4),
  imperativeInformal: Word('поплыви', 6),
  imperativeFormal: Word('поплывите', 6),
  imperfect: [],
};

perfectVerbs.set(поплыть.name.text, поплыть);

export { поплыть };