import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приоткрыть: PerfectVerb = {
  name: Word('приоткрыть', 7),
  singular1stPerson: Word('приоткрою', 7),
  singular2ndPerson: Word('приоткроешь', 7),
  singular3rdPerson: Word('приоткроет', 7),
  plural1stPerson: Word('приоткроем', 7),
  plural2ndPerson: Word('приоткроете', 7),
  plural3rdPerson: Word('приоткроют', 7),
  masculinePast: Word('приоткрыл', 7),
  femininePast: Word('приоткрыла', 7),
  neuterPast: Word('приоткрыло', 7),
  pluralPast: Word('приоткрыли', 7),
  imperativeInformal: Word('приоткрой', 7),
  imperativeFormal: Word('приоткройте', 7),
  imperfect: [],
};

perfectVerbs.set(приоткрыть.name.text, приоткрыть);

export { приоткрыть };