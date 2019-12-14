import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослыть: PerfectVerb = {
  name: Word('прослыть', 5),
  singular1stPerson: Word('прослыву', 7),
  singular2ndPerson: Word('прослывёшь', 2),
  singular3rdPerson: Word('прослывёт', 2),
  plural1stPerson: Word('прослывём', 2),
  plural2ndPerson: Word('прослывёте', 9),
  plural3rdPerson: Word('прослывут', 7),
  masculinePast: Word('прослыл', 5),
  femininePast: Word('прослыла', 7),
  neuterPast: Word('прослыло,прослыло'', 5),
  pluralPast: Word('прослыли', 5),
  imperativeInformal: Word('прослыви', 7),
  imperativeFormal: Word('прослывите', 7),
  imperfect: ['слыть'],
};

perfectVerbs.set(прослыть.name.text, прослыть);

export { прослыть };