import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсортировывать: PerfectVerb = {
  name: Word('отсортировывать', 8),
  singular1stPerson: Word('отсортировываю', 8),
  singular2ndPerson: Word('отсортировываешь', 8),
  singular3rdPerson: Word('отсортировывает', 8),
  plural1stPerson: Word('отсортировываем', 8),
  plural2ndPerson: Word('отсортировываете', 8),
  plural3rdPerson: Word('отсортировывают', 8),
  masculinePast: Word('отсортировывал', 8),
  femininePast: Word('отсортировывала', 8),
  neuterPast: Word('отсортировывало', 8),
  pluralPast: Word('отсортировывали', 8),
  imperativeInformal: Word('отсортировывай', 8),
  imperativeFormal: Word('отсортировывайте', 8),
  imperfect: [],
};

perfectVerbs.set(отсортировывать.name.text, отсортировывать);

export { отсортировывать };