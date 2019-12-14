import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрыть: PerfectVerb = {
  name: Word('разрыть', 4),
  singular1stPerson: Word('разрою', 4),
  singular2ndPerson: Word('разроешь', 4),
  singular3rdPerson: Word('разроет', 4),
  plural1stPerson: Word('разроем', 4),
  plural2ndPerson: Word('разроете', 4),
  plural3rdPerson: Word('разроют', 4),
  masculinePast: Word('разрыл', 4),
  femininePast: Word('разрыла', 4),
  neuterPast: Word('разрыло', 4),
  pluralPast: Word('разрыли', 4),
  imperativeInformal: Word('разрой', 4),
  imperativeFormal: Word('разройте', 4),
  imperfect: [],
};

perfectVerbs.set(разрыть.name.text, разрыть);

export { разрыть };