import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поостыть: PerfectVerb = {
  name: Word('поостыть', 5),
  singular1stPerson: Word('поостыну', 5),
  singular2ndPerson: Word('поостынешь', 5),
  singular3rdPerson: Word('поостынет', 5),
  plural1stPerson: Word('поостынем', 5),
  plural2ndPerson: Word('поостынете', 5),
  plural3rdPerson: Word('поостынут', 5),
  masculinePast: Word('поостыл', 5),
  femininePast: Word('поостыла', 5),
  neuterPast: Word('поостыло', 5),
  pluralPast: Word('поостыли', 5),
  imperativeInformal: Word('поостынь', 5),
  imperativeFormal: Word('поостыньте', 5),
  imperfect: [],
};

perfectVerbs.set(поостыть.name.text, поостыть);

export { поостыть };