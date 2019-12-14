import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымыть: PerfectVerb = {
  name: Word('вымыть', 1),
  singular1stPerson: Word('вымою', 1),
  singular2ndPerson: Word('вымоешь', 1),
  singular3rdPerson: Word('вымоет', 1),
  plural1stPerson: Word('вымоем', 1),
  plural2ndPerson: Word('вымоете', 1),
  plural3rdPerson: Word('вымоют', 1),
  masculinePast: Word('вымыл', 1),
  femininePast: Word('вымыла', 1),
  neuterPast: Word('вымыло', 1),
  pluralPast: Word('вымыли', 1),
  imperativeInformal: Word('вымой', 1),
  imperativeFormal: Word('вымойте', 1),
  imperfect: [],
};

perfectVerbs.set(вымыть.name.text, вымыть);

export { вымыть };