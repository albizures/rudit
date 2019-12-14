import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздобыть: PerfectVerb = {
  name: Word('раздобыть', 6),
  singular1stPerson: Word('раздобуду', 6),
  singular2ndPerson: Word('раздобудешь', 6),
  singular3rdPerson: Word('раздобудет', 6),
  plural1stPerson: Word('раздобудем', 6),
  plural2ndPerson: Word('раздобудете', 6),
  plural3rdPerson: Word('раздобудут', 6),
  masculinePast: Word('раздобыл', 6),
  femininePast: Word('раздобыла', 6),
  neuterPast: Word('раздобыло', 6),
  pluralPast: Word('раздобыли', 6),
  imperativeInformal: Word('раздобудь', 6),
  imperativeFormal: Word('раздобудьте', 6),
  imperfect: [],
};

perfectVerbs.set(раздобыть.name.text, раздобыть);

export { раздобыть };