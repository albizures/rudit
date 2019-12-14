import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрыть: PerfectVerb = {
  name: Word('изрыть', 3),
  singular1stPerson: Word('изрою', 3),
  singular2ndPerson: Word('изроешь', 3),
  singular3rdPerson: Word('изроет', 3),
  plural1stPerson: Word('изроем', 3),
  plural2ndPerson: Word('изроете', 3),
  plural3rdPerson: Word('изроют', 3),
  masculinePast: Word('изрыл', 3),
  femininePast: Word('изрыла', 3),
  neuterPast: Word('изрыло', 3),
  pluralPast: Word('изрыли', 3),
  imperativeInformal: Word('изрой', 3),
  imperativeFormal: Word('изройте', 3),
  imperfect: [],
};

perfectVerbs.set(изрыть.name.text, изрыть);

export { изрыть };