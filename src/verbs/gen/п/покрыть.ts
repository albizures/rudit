import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрыть: PerfectVerb = {
  name: Word('покрыть', 4),
  singular1stPerson: Word('покрою', 4),
  singular2ndPerson: Word('покроешь', 4),
  singular3rdPerson: Word('покроет', 4),
  plural1stPerson: Word('покроем', 4),
  plural2ndPerson: Word('покроете', 4),
  plural3rdPerson: Word('покроют', 4),
  masculinePast: Word('покрыл', 4),
  femininePast: Word('покрыла', 4),
  neuterPast: Word('покрыло', 4),
  pluralPast: Word('покрыли', 4),
  imperativeInformal: Word('покрой', 4),
  imperativeFormal: Word('покройте', 4),
  imperfect: ['крыть','покрывать'],
};

perfectVerbs.set(покрыть.name.text, покрыть);

export { покрыть };