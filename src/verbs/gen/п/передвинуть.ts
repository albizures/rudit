import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передвинуть: PerfectVerb = {
  name: Word('передвинуть', 6),
  singular1stPerson: Word('передвину', 6),
  singular2ndPerson: Word('передвинешь', 6),
  singular3rdPerson: Word('передвинет', 6),
  plural1stPerson: Word('передвинем', 6),
  plural2ndPerson: Word('передвинете', 6),
  plural3rdPerson: Word('передвинут', 6),
  masculinePast: Word('передвинул', 6),
  femininePast: Word('передвинула', 6),
  neuterPast: Word('передвинуло', 6),
  pluralPast: Word('передвинули', 6),
  imperativeInformal: Word('передвинь', 6),
  imperativeFormal: Word('передвиньте', 6),
  imperfect: [],
};

perfectVerbs.set(передвинуть.name.text, передвинуть);

export { передвинуть };