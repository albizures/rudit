import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвыть: PerfectVerb = {
  name: Word('взвыть', 3),
  singular1stPerson: Word('взвою', 3),
  singular2ndPerson: Word('взвоешь', 3),
  singular3rdPerson: Word('взвоет', 3),
  plural1stPerson: Word('взвоем', 3),
  plural2ndPerson: Word('взвоете', 3),
  plural3rdPerson: Word('взвоют', 3),
  masculinePast: Word('взвыл', 3),
  femininePast: Word('взвыла', 3),
  neuterPast: Word('взвыло', 3),
  pluralPast: Word('взвыли', 3),
  imperativeInformal: Word('взвой', 3),
  imperativeFormal: Word('взвойте', 3),
  imperfect: [],
};

perfectVerbs.set(взвыть.name.text, взвыть);

export { взвыть };