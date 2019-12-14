import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кинуть: PerfectVerb = {
  name: Word('кинуть', 1),
  singular1stPerson: Word('кину', 1),
  singular2ndPerson: Word('кинешь', 1),
  singular3rdPerson: Word('кинет', 1),
  plural1stPerson: Word('кинем', 1),
  plural2ndPerson: Word('кинете', 1),
  plural3rdPerson: Word('кинут', 1),
  masculinePast: Word('кинул', 1),
  femininePast: Word('кинула', 1),
  neuterPast: Word('кинуло', 1),
  pluralPast: Word('кинули', 1),
  imperativeInformal: Word('кинь', 1),
  imperativeFormal: Word('киньте', 1),
  imperfect: ['кидать'],
};

perfectVerbs.set(кинуть.name.text, кинуть);

export { кинуть };