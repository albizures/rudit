import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарыть: PerfectVerb = {
  name: Word('зарыть', 3),
  singular1stPerson: Word('зарою', 3),
  singular2ndPerson: Word('зароешь', 3),
  singular3rdPerson: Word('зароет', 3),
  plural1stPerson: Word('зароем', 3),
  plural2ndPerson: Word('зароете', 3),
  plural3rdPerson: Word('зароют', 3),
  masculinePast: Word('зарыл', 3),
  femininePast: Word('зарыла', 3),
  neuterPast: Word('зарыло', 3),
  pluralPast: Word('зарыли', 3),
  imperativeInformal: Word('зарой', 3),
  imperativeFormal: Word('заройте', 3),
  imperfect: [],
};

perfectVerbs.set(зарыть.name.text, зарыть);

export { зарыть };