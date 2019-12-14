import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбыть: PerfectVerb = {
  name: Word('сбыть', 2),
  singular1stPerson: Word('сбуду', 2),
  singular2ndPerson: Word('сбудешь', 2),
  singular3rdPerson: Word('сбудет', 2),
  plural1stPerson: Word('сбудем', 2),
  plural2ndPerson: Word('сбудете', 2),
  plural3rdPerson: Word('сбудут', 2),
  masculinePast: Word('сбыл', 2),
  femininePast: Word('сбыла', 4),
  neuterPast: Word('сбыло', 2),
  pluralPast: Word('сбыли', 2),
  imperativeInformal: Word('сбудь', 2),
  imperativeFormal: Word('сбудьте', 2),
  imperfect: [],
};

perfectVerbs.set(сбыть.name.text, сбыть);

export { сбыть };