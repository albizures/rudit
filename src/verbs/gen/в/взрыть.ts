import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрыть: PerfectVerb = {
  name: Word('взрыть', 3),
  singular1stPerson: Word('взрою', 3),
  singular2ndPerson: Word('взроешь', 3),
  singular3rdPerson: Word('взроет', 3),
  plural1stPerson: Word('взроем', 3),
  plural2ndPerson: Word('взроете', 3),
  plural3rdPerson: Word('взроют', 3),
  masculinePast: Word('взрыл', 3),
  femininePast: Word('взрыла', 3),
  neuterPast: Word('взрыло', 3),
  pluralPast: Word('взрыли', 3),
  imperativeInformal: Word('взрой', 3),
  imperativeFormal: Word('взройте', 3),
  imperfect: [],
};

perfectVerbs.set(взрыть.name.text, взрыть);

export { взрыть };