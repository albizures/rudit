import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробыть: PerfectVerb = {
  name: Word('пробыть', 4),
  singular1stPerson: Word('пробуду', 4),
  singular2ndPerson: Word('пробудешь', 4),
  singular3rdPerson: Word('пробудет', 4),
  plural1stPerson: Word('пробудем', 4),
  plural2ndPerson: Word('пробудете', 4),
  plural3rdPerson: Word('пробудут', 4),
  masculinePast: Word('пробыл//про'был', 4),
  femininePast: Word('пробыла', 6),
  neuterPast: Word('пробыло//про'было', 4),
  pluralPast: Word('пробыли//про'были', 4),
  imperativeInformal: Word('пробудь', 4),
  imperativeFormal: Word('пробудьте', 4),
  imperfect: [],
};

perfectVerbs.set(пробыть.name.text, пробыть);

export { пробыть };