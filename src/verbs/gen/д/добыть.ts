import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добыть: PerfectVerb = {
  name: Word('добыть', 3),
  singular1stPerson: Word('добуду', 3),
  singular2ndPerson: Word('добудешь', 3),
  singular3rdPerson: Word('добудет', 3),
  plural1stPerson: Word('добудем', 3),
  plural2ndPerson: Word('добудете', 3),
  plural3rdPerson: Word('добудут', 3),
  masculinePast: Word('добыл', 3),
  femininePast: Word('добыла', 3),
  neuterPast: Word('добыло', 3),
  pluralPast: Word('добыли', 3),
  imperativeInformal: Word('добудь', 3),
  imperativeFormal: Word('добудьте', 3),
  imperfect: ['добывать'],
};

perfectVerbs.set(добыть.name.text, добыть);

export { добыть };