import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домыть: PerfectVerb = {
  name: Word('домыть', 3),
  singular1stPerson: Word('домою', 3),
  singular2ndPerson: Word('домоешь', 3),
  singular3rdPerson: Word('домоет', 3),
  plural1stPerson: Word('домоем', 3),
  plural2ndPerson: Word('домоете', 3),
  plural3rdPerson: Word('домоют', 3),
  masculinePast: Word('домыл', 3),
  femininePast: Word('домыла', 3),
  neuterPast: Word('домыло', 3),
  pluralPast: Word('домыли', 3),
  imperativeInformal: Word('домой', 3),
  imperativeFormal: Word('домойте', 3),
  imperfect: [],
};

perfectVerbs.set(домыть.name.text, домыть);

export { домыть };