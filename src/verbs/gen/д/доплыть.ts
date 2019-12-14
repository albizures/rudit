import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплыть: PerfectVerb = {
  name: Word('доплыть', 4),
  singular1stPerson: Word('доплыву', 6),
  singular2ndPerson: Word('доплывёшь', 1),
  singular3rdPerson: Word('доплывёт', 1),
  plural1stPerson: Word('доплывём', 1),
  plural2ndPerson: Word('доплывёте', 8),
  plural3rdPerson: Word('доплывут', 6),
  masculinePast: Word('доплыл', 4),
  femininePast: Word('доплыла', 6),
  neuterPast: Word('доплыло', 4),
  pluralPast: Word('доплыли', 4),
  imperativeInformal: Word('доплыви', 6),
  imperativeFormal: Word('доплывите', 6),
  imperfect: [],
};

perfectVerbs.set(доплыть.name.text, доплыть);

export { доплыть };