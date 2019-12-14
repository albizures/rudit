import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрыть: PerfectVerb = {
  name: Word('накрыть', 4),
  singular1stPerson: Word('накрою', 4),
  singular2ndPerson: Word('накроешь', 4),
  singular3rdPerson: Word('накроет', 4),
  plural1stPerson: Word('накроем', 4),
  plural2ndPerson: Word('накроете', 4),
  plural3rdPerson: Word('накроют', 4),
  masculinePast: Word('накрыл', 4),
  femininePast: Word('накрыла', 4),
  neuterPast: Word('накрыло', 4),
  pluralPast: Word('накрыли', 4),
  imperativeInformal: Word('накрой', 4),
  imperativeFormal: Word('накройте', 4),
  imperfect: [],
};

perfectVerbs.set(накрыть.name.text, накрыть);

export { накрыть };