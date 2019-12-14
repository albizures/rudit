import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплыть: PerfectVerb = {
  name: Word('уплыть', 3),
  singular1stPerson: Word('уплыву', 5),
  singular2ndPerson: Word('уплывёшь', 0),
  singular3rdPerson: Word('уплывёт', 0),
  plural1stPerson: Word('уплывём', 0),
  plural2ndPerson: Word('уплывёте', 7),
  plural3rdPerson: Word('уплывут', 5),
  masculinePast: Word('уплыл', 3),
  femininePast: Word('уплыла', 5),
  neuterPast: Word('уплыло', 3),
  pluralPast: Word('уплыли', 3),
  imperativeInformal: Word('уплыви', 5),
  imperativeFormal: Word('уплывите', 5),
  imperfect: [],
};

perfectVerbs.set(уплыть.name.text, уплыть);

export { уплыть };