import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплыть: PerfectVerb = {
  name: Word('всплыть', 4),
  singular1stPerson: Word('всплыву', 6),
  singular2ndPerson: Word('всплывёшь', 6),
  singular3rdPerson: Word('всплывёт', 6),
  plural1stPerson: Word('всплывём', 6),
  plural2ndPerson: Word('всплывёте', 8),
  plural3rdPerson: Word('всплывут', 6),
  masculinePast: Word('всплыл', 4),
  femininePast: Word('всплыла', 6),
  neuterPast: Word('всплыло', 4),
  pluralPast: Word('всплыли', 4),
  imperativeInformal: Word('всплыви', 6),
  imperativeFormal: Word('всплывите', 6),
  imperfect: [],
};

perfectVerbs.set(всплыть.name.text, всплыть);

export { всплыть };