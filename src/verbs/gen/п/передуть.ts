import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передуть: PerfectVerb = {
  name: Word('передуть', 5),
  singular1stPerson: Word('передую', 5),
  singular2ndPerson: Word('передуешь', 5),
  singular3rdPerson: Word('передует', 5),
  plural1stPerson: Word('передуем', 5),
  plural2ndPerson: Word('передуете', 5),
  plural3rdPerson: Word('передуют', 5),
  masculinePast: Word('передул', 5),
  femininePast: Word('передула', 5),
  neuterPast: Word('передуло', 5),
  pluralPast: Word('передули', 5),
  imperativeInformal: Word('передуй', 5),
  imperativeFormal: Word('передуйте', 5),
  imperfect: [],
};

perfectVerbs.set(передуть.name.text, передуть);

export { передуть };