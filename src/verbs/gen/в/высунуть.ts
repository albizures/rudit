import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высунуть: PerfectVerb = {
  name: Word('высунуть', 1),
  singular1stPerson: Word('высуну', 1),
  singular2ndPerson: Word('высунешь', 1),
  singular3rdPerson: Word('высунет', 1),
  plural1stPerson: Word('высунем', 1),
  plural2ndPerson: Word('высунете', 1),
  plural3rdPerson: Word('высунут', 1),
  masculinePast: Word('высунул', 1),
  femininePast: Word('высунула', 1),
  neuterPast: Word('высунуло', 1),
  pluralPast: Word('высунули', 1),
  imperativeInformal: Word('высуни//вы'сунь', 1),
  imperativeFormal: Word('высуньте', 1),
  imperfect: [],
};

perfectVerbs.set(высунуть.name.text, высунуть);

export { высунуть };