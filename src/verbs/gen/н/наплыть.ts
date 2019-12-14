import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплыть: PerfectVerb = {
  name: Word('наплыть', 4),
  singular1stPerson: Word('наплыву', 6),
  singular2ndPerson: Word('наплывёшь', 1),
  singular3rdPerson: Word('наплывёт', 1),
  plural1stPerson: Word('наплывём', 1),
  plural2ndPerson: Word('наплывёте', 1),
  plural3rdPerson: Word('наплывут', 6),
  masculinePast: Word('наплыл', 4),
  femininePast: Word('наплыла', 6),
  neuterPast: Word('наплыло', 4),
  pluralPast: Word('наплыли', 4),
  imperativeInformal: Word('наплыви', 6),
  imperativeFormal: Word('наплывите', 6),
  imperfect: [],
};

perfectVerbs.set(наплыть.name.text, наплыть);

export { наплыть };