import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крыть: PerfectVerb = {
  name: Word('крыть', 2),
  singular1stPerson: Word('крою', 2),
  singular2ndPerson: Word('кроешь', 2),
  singular3rdPerson: Word('кроет', 2),
  plural1stPerson: Word('кроем', 2),
  plural2ndPerson: Word('кроете', 2),
  plural3rdPerson: Word('кроют', 2),
  masculinePast: Word('крыл', 2),
  femininePast: Word('крыла', 2),
  neuterPast: Word('крыло', 2),
  pluralPast: Word('крыли', 2),
  imperativeInformal: Word('крой', 2),
  imperativeFormal: Word('кройте', 2),
  imperfect: ['покрыть'],
};

perfectVerbs.set(крыть.name.text, крыть);

export { крыть };