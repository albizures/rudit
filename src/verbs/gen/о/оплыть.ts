import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплыть: PerfectVerb = {
  name: Word('оплыть', 3),
  singular1stPerson: Word('оплыву', 5),
  singular2ndPerson: Word('оплывёшь', 5),
  singular3rdPerson: Word('оплывёт', 5),
  plural1stPerson: Word('оплывём', 5),
  plural2ndPerson: Word('оплывёте', 5),
  plural3rdPerson: Word('оплывут', 5),
  masculinePast: Word('оплыл', 3),
  femininePast: Word('оплыла', 5),
  neuterPast: Word('оплыло', 3),
  pluralPast: Word('оплыли', 3),
  imperativeInformal: Word('оплыви', 5),
  imperativeFormal: Word('оплывите', 5),
  imperfect: [],
};

perfectVerbs.set(оплыть.name.text, оплыть);

export { оплыть };