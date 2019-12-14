import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мыть: PerfectVerb = {
  name: Word('мыть', 1),
  singular1stPerson: Word('мою', 1),
  singular2ndPerson: Word('моешь', 1),
  singular3rdPerson: Word('моет', 1),
  plural1stPerson: Word('моем', 1),
  plural2ndPerson: Word('моете', 1),
  plural3rdPerson: Word('моют', 1),
  masculinePast: Word('мыл', 1),
  femininePast: Word('мыла', 1),
  neuterPast: Word('мыло', 1),
  pluralPast: Word('мыли', 1),
  imperativeInformal: Word('мой', 1),
  imperativeFormal: Word('мойте', 1),
  imperfect: ['помыть','умыть','вымыть'],
};

perfectVerbs.set(мыть.name.text, мыть);

export { мыть };