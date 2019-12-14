import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплыть: PerfectVerb = {
  name: Word('выплыть', 1),
  singular1stPerson: Word('выплыву', 1),
  singular2ndPerson: Word('выплывешь', 1),
  singular3rdPerson: Word('выплывет', 1),
  plural1stPerson: Word('выплывем', 1),
  plural2ndPerson: Word('выплывете', 1),
  plural3rdPerson: Word('выплывут', 1),
  masculinePast: Word('выплыл', 1),
  femininePast: Word('выплыла', 1),
  neuterPast: Word('выплыло', 1),
  pluralPast: Word('выплыли', 1),
  imperativeInformal: Word('выплыви', 1),
  imperativeFormal: Word('выплывите', 1),
  imperfect: ['выплывать'],
};

perfectVerbs.set(выплыть.name.text, выплыть);

export { выплыть };