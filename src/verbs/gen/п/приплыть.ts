import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплыть: PerfectVerb = {
  name: Word('приплыть', 5),
  singular1stPerson: Word('приплыву', 7),
  singular2ndPerson: Word('приплывёшь', 7),
  singular3rdPerson: Word('приплывёт', 7),
  plural1stPerson: Word('приплывём', 7),
  plural2ndPerson: Word('приплывёте', 7),
  plural3rdPerson: Word('приплывут', 7),
  masculinePast: Word('приплыл', 5),
  femininePast: Word('приплыла', 7),
  neuterPast: Word('приплыло', 5),
  pluralPast: Word('приплыли', 5),
  imperativeInformal: Word('приплыви', 7),
  imperativeFormal: Word('приплывите', 7),
  imperfect: [],
};

perfectVerbs.set(приплыть.name.text, приплыть);

export { приплыть };