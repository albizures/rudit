import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поглядывать: PerfectVerb = {
  name: Word('поглядывать', 4),
  singular1stPerson: Word('поглядываю', 4),
  singular2ndPerson: Word('поглядываешь', 4),
  singular3rdPerson: Word('поглядывает', 4),
  plural1stPerson: Word('поглядываем', 4),
  plural2ndPerson: Word('поглядываете', 4),
  plural3rdPerson: Word('поглядывают', 4),
  masculinePast: Word('поглядывал', 4),
  femininePast: Word('поглядывала', 4),
  neuterPast: Word('поглядывало', 4),
  pluralPast: Word('поглядывали', 4),
  imperativeInformal: Word('поглядывай', 4),
  imperativeFormal: Word('поглядывайте', 4),
  imperfect: ['поглядеть'],
};

perfectVerbs.set(поглядывать.name.text, поглядывать);

export { поглядывать };