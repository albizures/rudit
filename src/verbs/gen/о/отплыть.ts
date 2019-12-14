import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплыть: PerfectVerb = {
  name: Word('отплыть', 4),
  singular1stPerson: Word('отплыву', 6),
  singular2ndPerson: Word('отплывёшь', 0),
  singular3rdPerson: Word('отплывёт', 0),
  plural1stPerson: Word('отплывём', 0),
  plural2ndPerson: Word('отплывёте', 8),
  plural3rdPerson: Word('отплывут', 6),
  masculinePast: Word('отплыл', 4),
  femininePast: Word('отплыла', 6),
  neuterPast: Word('отплыло,отплыло'', 4),
  pluralPast: Word('отплыли', 4),
  imperativeInformal: Word('отплыви', 6),
  imperativeFormal: Word('отплывите', 6),
  imperfect: ['отплывать'],
};

perfectVerbs.set(отплыть.name.text, отплыть);

export { отплыть };