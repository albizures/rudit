import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырыть: PerfectVerb = {
  name: Word('вырыть', 1),
  singular1stPerson: Word('вырою', 1),
  singular2ndPerson: Word('выроешь', 1),
  singular3rdPerson: Word('выроет', 1),
  plural1stPerson: Word('выроем', 1),
  plural2ndPerson: Word('выроете', 1),
  plural3rdPerson: Word('выроют', 1),
  masculinePast: Word('вырыл', 1),
  femininePast: Word('вырыла', 1),
  neuterPast: Word('вырыло', 1),
  pluralPast: Word('вырыли', 1),
  imperativeInformal: Word('вырой', 1),
  imperativeFormal: Word('выройте', 1),
  imperfect: ['вырывать'],
};

perfectVerbs.set(вырыть.name.text, вырыть);

export { вырыть };