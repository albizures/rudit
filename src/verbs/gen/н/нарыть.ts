import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарыть: PerfectVerb = {
  name: Word('нарыть', 3),
  singular1stPerson: Word('нарою', 3),
  singular2ndPerson: Word('нароешь', 3),
  singular3rdPerson: Word('нароет', 3),
  plural1stPerson: Word('нароем', 3),
  plural2ndPerson: Word('нароете', 3),
  plural3rdPerson: Word('нароют', 3),
  masculinePast: Word('нарыл', 3),
  femininePast: Word('нарыла', 3),
  neuterPast: Word('нарыло', 3),
  pluralPast: Word('нарыли', 3),
  imperativeInformal: Word('нарой', 3),
  imperativeFormal: Word('наройте', 3),
  imperfect: [],
};

perfectVerbs.set(нарыть.name.text, нарыть);

export { нарыть };