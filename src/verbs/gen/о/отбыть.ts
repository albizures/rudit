import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбыть: PerfectVerb = {
  name: Word('отбыть', 3),
  singular1stPerson: Word('отбуду', 3),
  singular2ndPerson: Word('отбудешь', 3),
  singular3rdPerson: Word('отбудет', 3),
  plural1stPerson: Word('отбудем', 3),
  plural2ndPerson: Word('отбудете', 3),
  plural3rdPerson: Word('отбудут', 3),
  masculinePast: Word('отбыл//о'тбыл', 3),
  femininePast: Word('отбыла', 5),
  neuterPast: Word('отбыло//о'тбыло', 3),
  pluralPast: Word('отбыли//о'тбыли', 3),
  imperativeInformal: Word('отбудь', 3),
  imperativeFormal: Word('отбудьте', 3),
  imperfect: [],
};

perfectVerbs.set(отбыть.name.text, отбыть);

export { отбыть };