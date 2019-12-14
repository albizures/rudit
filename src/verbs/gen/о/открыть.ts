import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открыть: PerfectVerb = {
  name: Word('открыть', 4),
  singular1stPerson: Word('открою', 4),
  singular2ndPerson: Word('откроешь', 4),
  singular3rdPerson: Word('откроет', 4),
  plural1stPerson: Word('откроем', 4),
  plural2ndPerson: Word('откроете', 4),
  plural3rdPerson: Word('откроют', 4),
  masculinePast: Word('открыл', 4),
  femininePast: Word('открыла', 4),
  neuterPast: Word('открыло', 4),
  pluralPast: Word('открыли', 4),
  imperativeInformal: Word('открой', 4),
  imperativeFormal: Word('откройте', 4),
  imperfect: ['открывать'],
};

perfectVerbs.set(открыть.name.text, открыть);

export { открыть };