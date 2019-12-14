import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завыть: PerfectVerb = {
  name: Word('завыть', 3),
  singular1stPerson: Word('завою', 3),
  singular2ndPerson: Word('завоешь', 3),
  singular3rdPerson: Word('завоет', 3),
  plural1stPerson: Word('завоем', 3),
  plural2ndPerson: Word('завоете', 3),
  plural3rdPerson: Word('завоют', 3),
  masculinePast: Word('завыл', 3),
  femininePast: Word('завыла', 3),
  neuterPast: Word('завыло', 3),
  pluralPast: Word('завыли', 3),
  imperativeInformal: Word('завой', 3),
  imperativeFormal: Word('завойте', 3),
  imperfect: [],
};

perfectVerbs.set(завыть.name.text, завыть);

export { завыть };