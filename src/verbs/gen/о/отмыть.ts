import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмыть: PerfectVerb = {
  name: Word('отмыть', 3),
  singular1stPerson: Word('отмою', 3),
  singular2ndPerson: Word('отмоешь', 3),
  singular3rdPerson: Word('отмоет', 3),
  plural1stPerson: Word('отмоем', 3),
  plural2ndPerson: Word('отмоете', 3),
  plural3rdPerson: Word('отмоют', 3),
  masculinePast: Word('отмыл', 3),
  femininePast: Word('отмыла', 3),
  neuterPast: Word('отмыло', 3),
  pluralPast: Word('отмыли', 3),
  imperativeInformal: Word('отмой', 3),
  imperativeFormal: Word('отмойте', 3),
  imperfect: [],
};

perfectVerbs.set(отмыть.name.text, отмыть);

export { отмыть };