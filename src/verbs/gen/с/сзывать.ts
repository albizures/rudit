import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сзывать: PerfectVerb = {
  name: Word('сзывать', 4),
  singular1stPerson: Word('сзываю', 4),
  singular2ndPerson: Word('сзываешь', 4),
  singular3rdPerson: Word('сзывает', 4),
  plural1stPerson: Word('сзываем', 4),
  plural2ndPerson: Word('сзываете', 4),
  plural3rdPerson: Word('сзывают', 4),
  masculinePast: Word('сзывал', 4),
  femininePast: Word('сзывала', 4),
  neuterPast: Word('сзывало', 4),
  pluralPast: Word('сзывали', 4),
  imperativeInformal: Word('сзывай', 4),
  imperativeFormal: Word('сзывайте', 4),
  imperfect: [],
};

perfectVerbs.set(сзывать.name.text, сзывать);

export { сзывать };