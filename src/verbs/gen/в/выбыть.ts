import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбыть: PerfectVerb = {
  name: Word('выбыть', 1),
  singular1stPerson: Word('выбуду', 1),
  singular2ndPerson: Word('выбудешь', 1),
  singular3rdPerson: Word('выбудет', 1),
  plural1stPerson: Word('выбудем', 1),
  plural2ndPerson: Word('выбудете', 1),
  plural3rdPerson: Word('выбудут', 1),
  masculinePast: Word('выбыл', 1),
  femininePast: Word('выбыла', 1),
  neuterPast: Word('выбыло', 1),
  pluralPast: Word('выбыли', 1),
  imperativeInformal: Word('выбудь', 1),
  imperativeFormal: Word('выбудьте', 1),
  imperfect: [],
};

perfectVerbs.set(выбыть.name.text, выбыть);

export { выбыть };