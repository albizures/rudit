import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отзывать: PerfectVerb = {
  name: Word('отзывать', 5),
  singular1stPerson: Word('отзываю', 5),
  singular2ndPerson: Word('отзываешь', 5),
  singular3rdPerson: Word('отзывает', 5),
  plural1stPerson: Word('отзываем', 5),
  plural2ndPerson: Word('отзываете', 5),
  plural3rdPerson: Word('отзывают', 5),
  masculinePast: Word('отзывал', 5),
  femininePast: Word('отзывала', 5),
  neuterPast: Word('отзывало', 5),
  pluralPast: Word('отзывали', 5),
  imperativeInformal: Word('отзывай', 5),
  imperativeFormal: Word('отзывайте', 5),
  imperfect: [],
};

perfectVerbs.set(отзывать.name.text, отзывать);

export { отзывать };