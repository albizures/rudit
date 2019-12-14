import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрыть: PerfectVerb = {
  name: Word('отрыть', 3),
  singular1stPerson: Word('отрою', 3),
  singular2ndPerson: Word('отроешь', 3),
  singular3rdPerson: Word('отроет', 3),
  plural1stPerson: Word('отроем', 3),
  plural2ndPerson: Word('отроете', 3),
  plural3rdPerson: Word('отроют', 3),
  masculinePast: Word('отрыл', 3),
  femininePast: Word('отрыла', 3),
  neuterPast: Word('отрыло', 3),
  pluralPast: Word('отрыли', 3),
  imperativeInformal: Word('отрой', 3),
  imperativeFormal: Word('отройте', 3),
  imperfect: ['отрывать'],
};

perfectVerbs.set(отрыть.name.text, отрыть);

export { отрыть };