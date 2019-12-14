import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подплыть: PerfectVerb = {
  name: Word('подплыть', 5),
  singular1stPerson: Word('подплыву', 7),
  singular2ndPerson: Word('подплывёшь', 1),
  singular3rdPerson: Word('подплывёт', 1),
  plural1stPerson: Word('подплывём', 1),
  plural2ndPerson: Word('подплывёте', 9),
  plural3rdPerson: Word('подплывут', 7),
  masculinePast: Word('подплыл', 5),
  femininePast: Word('подплыла', 7),
  neuterPast: Word('подплыло', 5),
  pluralPast: Word('подплыли', 5),
  imperativeInformal: Word('подплыви', 7),
  imperativeFormal: Word('подплывите', 7),
  imperfect: [],
};

perfectVerbs.set(подплыть.name.text, подплыть);

export { подплыть };