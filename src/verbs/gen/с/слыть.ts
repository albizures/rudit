import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слыть: PerfectVerb = {
  name: Word('слыть', 2),
  singular1stPerson: Word('слыву', 4),
  singular2ndPerson: Word('слывёшь', 4),
  singular3rdPerson: Word('слывёт', 4),
  plural1stPerson: Word('слывём', 4),
  plural2ndPerson: Word('слывёте', 6),
  plural3rdPerson: Word('слывут', 4),
  masculinePast: Word('слыл', 2),
  femininePast: Word('слыла', 4),
  neuterPast: Word('слыло,слыло'', 2),
  pluralPast: Word('слыли', 2),
  imperativeInformal: Word('слыви', 4),
  imperativeFormal: Word('слывите', 4),
  imperfect: ['прослыть'],
};

perfectVerbs.set(слыть.name.text, слыть);

export { слыть };