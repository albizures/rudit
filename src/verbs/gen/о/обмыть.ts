import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмыть: PerfectVerb = {
  name: Word('обмыть', 3),
  singular1stPerson: Word('обмою', 3),
  singular2ndPerson: Word('обмоешь', 3),
  singular3rdPerson: Word('обмоет', 3),
  plural1stPerson: Word('обмоем', 3),
  plural2ndPerson: Word('обмоете', 3),
  plural3rdPerson: Word('обмоют', 3),
  masculinePast: Word('обмыл', 3),
  femininePast: Word('обмыла', 3),
  neuterPast: Word('обмыло', 3),
  pluralPast: Word('обмыли', 3),
  imperativeInformal: Word('обмой', 3),
  imperativeFormal: Word('обмойте', 3),
  imperfect: [],
};

perfectVerbs.set(обмыть.name.text, обмыть);

export { обмыть };