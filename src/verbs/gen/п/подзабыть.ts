import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подзабыть: PerfectVerb = {
  name: Word('подзабыть', 6),
  singular1stPerson: Word('подзабуду', 6),
  singular2ndPerson: Word('подзабудешь', 6),
  singular3rdPerson: Word('подзабудет', 6),
  plural1stPerson: Word('подзабудем', 6),
  plural2ndPerson: Word('подзабудете', 6),
  plural3rdPerson: Word('подзабудут', 6),
  masculinePast: Word('подзабыл', 6),
  femininePast: Word('подзабыла', 6),
  neuterPast: Word('подзабыло', 6),
  pluralPast: Word('подзабыли', 6),
  imperativeInformal: Word('подзабудь', 6),
  imperativeFormal: Word('подзабудьте', 6),
  imperfect: [],
};

perfectVerbs.set(подзабыть.name.text, подзабыть);

export { подзабыть };