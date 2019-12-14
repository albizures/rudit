import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмыть: PerfectVerb = {
  name: Word('подмыть', 4),
  singular1stPerson: Word('подмою', 4),
  singular2ndPerson: Word('подмоешь', 4),
  singular3rdPerson: Word('подмоет', 4),
  plural1stPerson: Word('подмоем', 4),
  plural2ndPerson: Word('подмоете', 4),
  plural3rdPerson: Word('подмоют', 4),
  masculinePast: Word('подмыл', 4),
  femininePast: Word('подмыла', 4),
  neuterPast: Word('подмыло', 4),
  pluralPast: Word('подмыли', 4),
  imperativeInformal: Word('подмой', 4),
  imperativeFormal: Word('подмойте', 4),
  imperfect: [],
};

perfectVerbs.set(подмыть.name.text, подмыть);

export { подмыть };