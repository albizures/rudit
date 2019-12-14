import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const моргать: PerfectVerb = {
  name: Word('моргать', 4),
  singular1stPerson: Word('моргаю', 4),
  singular2ndPerson: Word('моргаешь', 4),
  singular3rdPerson: Word('моргает', 4),
  plural1stPerson: Word('моргаем', 4),
  plural2ndPerson: Word('моргаете', 4),
  plural3rdPerson: Word('моргают', 4),
  masculinePast: Word('моргал', 4),
  femininePast: Word('моргала', 4),
  neuterPast: Word('моргало', 4),
  pluralPast: Word('моргали', 4),
  imperativeInformal: Word('моргай', 4),
  imperativeFormal: Word('моргайте', 4),
  imperfect: ['моргнуть'],
};

perfectVerbs.set(моргать.name.text, моргать);

export { моргать };