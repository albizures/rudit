import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплыть: PerfectVerb = {
  name: Word('заплыть', 4),
  singular1stPerson: Word('заплыву', 6),
  singular2ndPerson: Word('заплывёшь', 1),
  singular3rdPerson: Word('заплывёт', 1),
  plural1stPerson: Word('заплывём', 1),
  plural2ndPerson: Word('заплывёте', 1),
  plural3rdPerson: Word('заплывут', 6),
  masculinePast: Word('заплыл', 4),
  femininePast: Word('заплыла', 6),
  neuterPast: Word('заплыло', 4),
  pluralPast: Word('заплыли', 4),
  imperativeInformal: Word('заплыви', 6),
  imperativeFormal: Word('заплывите', 6),
  imperfect: [],
};

perfectVerbs.set(заплыть.name.text, заплыть);

export { заплыть };