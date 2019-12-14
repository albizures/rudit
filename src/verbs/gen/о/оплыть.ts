import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплыть: PerfectVerb = {
  name: Word('оплыть', 3),
  singular1stPerson: Word('оплыву', 5),
  singular2ndPerson: Word('оплывёшь', 0),
  singular3rdPerson: Word('оплывёт', 0),
  plural1stPerson: Word('оплывём', 0),
  plural2ndPerson: Word('оплывёте', 7),
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