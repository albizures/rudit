import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплыть: PerfectVerb = {
  name: Word('переплыть', 6),
  singular1stPerson: Word('переплыву', 8),
  singular2ndPerson: Word('переплывёшь', 1),
  singular3rdPerson: Word('переплывёт', 1),
  plural1stPerson: Word('переплывём', 1),
  plural2ndPerson: Word('переплывёте', 1),
  plural3rdPerson: Word('переплывут', 8),
  masculinePast: Word('переплыл', 6),
  femininePast: Word('переплыла', 8),
  neuterPast: Word('переплыло', 6),
  pluralPast: Word('переплыли', 6),
  imperativeInformal: Word('переплыви', 8),
  imperativeFormal: Word('переплывите', 8),
  imperfect: [],
};

perfectVerbs.set(переплыть.name.text, переплыть);

export { переплыть };