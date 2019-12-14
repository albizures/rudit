import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрыть: PerfectVerb = {
  name: Word('подрыть', 4),
  singular1stPerson: Word('подрою', 4),
  singular2ndPerson: Word('подроешь', 4),
  singular3rdPerson: Word('подроет', 4),
  plural1stPerson: Word('подроем', 4),
  plural2ndPerson: Word('подроете', 4),
  plural3rdPerson: Word('подроют', 4),
  masculinePast: Word('подрыл', 4),
  femininePast: Word('подрыла', 4),
  neuterPast: Word('подрыло', 4),
  pluralPast: Word('подрыли', 4),
  imperativeInformal: Word('подрой', 4),
  imperativeFormal: Word('подройте', 4),
  imperfect: ['подрывать'],
};

perfectVerbs.set(подрыть.name.text, подрыть);

export { подрыть };