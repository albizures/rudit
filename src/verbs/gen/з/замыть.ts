import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замыть: PerfectVerb = {
  name: Word('замыть', 3),
  singular1stPerson: Word('замою', 3),
  singular2ndPerson: Word('замоешь', 3),
  singular3rdPerson: Word('замоет', 3),
  plural1stPerson: Word('замоем', 3),
  plural2ndPerson: Word('замоете', 3),
  plural3rdPerson: Word('замоют', 3),
  masculinePast: Word('замыл', 3),
  femininePast: Word('замыла', 3),
  neuterPast: Word('замыло', 3),
  pluralPast: Word('замыли', 3),
  imperativeInformal: Word('замой', 3),
  imperativeFormal: Word('замойте', 3),
  imperfect: [],
};

perfectVerbs.set(замыть.name.text, замыть);

export { замыть };