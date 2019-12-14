import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взмыть: PerfectVerb = {
  name: Word('взмыть', 3),
  singular1stPerson: Word('взмою', 3),
  singular2ndPerson: Word('взмоешь', 3),
  singular3rdPerson: Word('взмоет', 3),
  plural1stPerson: Word('взмоем', 3),
  plural2ndPerson: Word('взмоете', 3),
  plural3rdPerson: Word('взмоют', 3),
  masculinePast: Word('взмыл', 3),
  femininePast: Word('взмыла', 3),
  neuterPast: Word('взмыло', 3),
  pluralPast: Word('взмыли', 3),
  imperativeInformal: Word('взмой', 3),
  imperativeFormal: Word('взмойте', 3),
  imperfect: [],
};

perfectVerbs.set(взмыть.name.text, взмыть);

export { взмыть };