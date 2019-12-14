import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всунуть: PerfectVerb = {
  name: Word('всунуть', 2),
  singular1stPerson: Word('всуну', 2),
  singular2ndPerson: Word('всунешь', 2),
  singular3rdPerson: Word('всунет', 2),
  plural1stPerson: Word('всунем', 2),
  plural2ndPerson: Word('всунете', 2),
  plural3rdPerson: Word('всунут', 2),
  masculinePast: Word('всунул', 2),
  femininePast: Word('всунула', 2),
  neuterPast: Word('всунуло', 2),
  pluralPast: Word('всунули', 2),
  imperativeInformal: Word('всунь', 2),
  imperativeFormal: Word('всуньте', 2),
  imperfect: [],
};

perfectVerbs.set(всунуть.name.text, всунуть);

export { всунуть };