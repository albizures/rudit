import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смыть: PerfectVerb = {
  name: Word('смыть', 2),
  singular1stPerson: Word('смою', 2),
  singular2ndPerson: Word('смоешь', 2),
  singular3rdPerson: Word('смоет', 2),
  plural1stPerson: Word('смоем', 2),
  plural2ndPerson: Word('смоете', 2),
  plural3rdPerson: Word('смоют', 2),
  masculinePast: Word('смыл', 2),
  femininePast: Word('смыла', 2),
  neuterPast: Word('смыло', 2),
  pluralPast: Word('смыли', 2),
  imperativeInformal: Word('смой', 2),
  imperativeFormal: Word('смойте', 2),
  imperfect: [],
};

perfectVerbs.set(смыть.name.text, смыть);

export { смыть };