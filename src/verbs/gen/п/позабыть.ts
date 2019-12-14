import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позабыть: PerfectVerb = {
  name: Word('позабыть', 5),
  singular1stPerson: Word('позабуду', 5),
  singular2ndPerson: Word('позабудешь', 5),
  singular3rdPerson: Word('позабудет', 5),
  plural1stPerson: Word('позабудем', 5),
  plural2ndPerson: Word('позабудете', 5),
  plural3rdPerson: Word('позабудут', 5),
  masculinePast: Word('позабыл', 5),
  femininePast: Word('позабыла', 5),
  neuterPast: Word('позабыло', 5),
  pluralPast: Word('позабыли', 5),
  imperativeInformal: Word('позабудь', 5),
  imperativeFormal: Word('позабудьте', 5),
  imperfect: [],
};

perfectVerbs.set(позабыть.name.text, позабыть);

export { позабыть };