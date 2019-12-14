import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемыть: PerfectVerb = {
  name: Word('перемыть', 5),
  singular1stPerson: Word('перемою', 5),
  singular2ndPerson: Word('перемоешь', 5),
  singular3rdPerson: Word('перемоет', 5),
  plural1stPerson: Word('перемоем', 5),
  plural2ndPerson: Word('перемоете', 5),
  plural3rdPerson: Word('перемоют', 5),
  masculinePast: Word('перемыл', 5),
  femininePast: Word('перемыла', 5),
  neuterPast: Word('перемыло', 5),
  pluralPast: Word('перемыли', 5),
  imperativeInformal: Word('перемой', 5),
  imperativeFormal: Word('перемойте', 5),
  imperfect: [],
};

perfectVerbs.set(перемыть.name.text, перемыть);

export { перемыть };