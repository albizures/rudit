import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врыть: PerfectVerb = {
  name: Word('врыть', 2),
  singular1stPerson: Word('врою', 2),
  singular2ndPerson: Word('вроешь', 2),
  singular3rdPerson: Word('вроет', 2),
  plural1stPerson: Word('вроем', 2),
  plural2ndPerson: Word('вроете', 2),
  plural3rdPerson: Word('вроют', 2),
  masculinePast: Word('врыл', 2),
  femininePast: Word('врыла', 2),
  neuterPast: Word('врыло', 2),
  pluralPast: Word('врыли', 2),
  imperativeInformal: Word('врой', 2),
  imperativeFormal: Word('вройте', 2),
  imperfect: [],
};

perfectVerbs.set(врыть.name.text, врыть);

export { врыть };