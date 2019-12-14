import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размыть: PerfectVerb = {
  name: Word('размыть', 4),
  singular1stPerson: Word('размою', 4),
  singular2ndPerson: Word('размоешь', 4),
  singular3rdPerson: Word('размоет', 4),
  plural1stPerson: Word('размоем', 4),
  plural2ndPerson: Word('размоете', 4),
  plural3rdPerson: Word('размоют', 4),
  masculinePast: Word('размыл', 4),
  femininePast: Word('размыла', 4),
  neuterPast: Word('размыло', 4),
  pluralPast: Word('размыли', 4),
  imperativeInformal: Word('размой', 4),
  imperativeFormal: Word('размойте', 4),
  imperfect: [],
};

perfectVerbs.set(размыть.name.text, размыть);

export { размыть };