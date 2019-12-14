import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кашлянуть: PerfectVerb = {
  name: Word('кашлянуть', 1),
  singular1stPerson: Word('кашляну', 1),
  singular2ndPerson: Word('кашлянешь', 1),
  singular3rdPerson: Word('кашлянет', 1),
  plural1stPerson: Word('кашлянем', 1),
  plural2ndPerson: Word('кашлянете', 1),
  plural3rdPerson: Word('кашлянут', 1),
  masculinePast: Word('кашлянул', 1),
  femininePast: Word('кашлянула', 1),
  neuterPast: Word('кашлянуло', 1),
  pluralPast: Word('кашлянули', 1),
  imperativeInformal: Word('кашляни', 1),
  imperativeFormal: Word('кашляньте', 1),
  imperfect: [],
};

perfectVerbs.set(кашлянуть.name.text, кашлянуть);

export { кашлянуть };