import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сунуть: PerfectVerb = {
  name: Word('сунуть', 1),
  singular1stPerson: Word('суну', 1),
  singular2ndPerson: Word('сунешь', 1),
  singular3rdPerson: Word('сунет', 1),
  plural1stPerson: Word('сунем', 1),
  plural2ndPerson: Word('сунете', 1),
  plural3rdPerson: Word('сунут', 1),
  masculinePast: Word('сунул', 1),
  femininePast: Word('сунула', 1),
  neuterPast: Word('сунуло', 1),
  pluralPast: Word('сунули', 1),
  imperativeInformal: Word('сунь', 1),
  imperativeFormal: Word('суньте', 1),
  imperfect: ['совать'],
};

perfectVerbs.set(сунуть.name.text, сунуть);

export { сунуть };