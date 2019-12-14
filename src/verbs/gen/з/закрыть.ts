import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрыть: PerfectVerb = {
  name: Word('закрыть', 4),
  singular1stPerson: Word('закрою', 4),
  singular2ndPerson: Word('закроешь', 4),
  singular3rdPerson: Word('закроет', 4),
  plural1stPerson: Word('закроем', 4),
  plural2ndPerson: Word('закроете', 4),
  plural3rdPerson: Word('закроют', 4),
  masculinePast: Word('закрыл', 4),
  femininePast: Word('закрыла', 4),
  neuterPast: Word('закрыло', 4),
  pluralPast: Word('закрыли', 4),
  imperativeInformal: Word('закрой', 4),
  imperativeFormal: Word('закройте', 4),
  imperfect: ['закрывать'],
};

perfectVerbs.set(закрыть.name.text, закрыть);

export { закрыть };