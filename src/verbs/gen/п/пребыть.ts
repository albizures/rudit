import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пребыть: PerfectVerb = {
  name: Word('пребыть', 4),
  singular1stPerson: Word('пребуду', 4),
  singular2ndPerson: Word('пребудешь', 4),
  singular3rdPerson: Word('пребудет', 4),
  plural1stPerson: Word('пребудем', 4),
  plural2ndPerson: Word('пребудете', 4),
  plural3rdPerson: Word('пребудут', 4),
  masculinePast: Word('пребыл', 4),
  femininePast: Word('пребыла', 6),
  neuterPast: Word('пребыло', 4),
  pluralPast: Word('пребыли', 4),
  imperativeInformal: Word('пребудь', 4),
  imperativeFormal: Word('пребудьте', 4),
  imperfect: [],
};

perfectVerbs.set(пребыть.name.text, пребыть);

export { пребыть };