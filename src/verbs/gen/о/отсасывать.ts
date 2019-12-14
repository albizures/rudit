import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсасывать: PerfectVerb = {
  name: Word('отсасывать', 3),
  singular1stPerson: Word('отсасываю', 3),
  singular2ndPerson: Word('отсасываешь', 3),
  singular3rdPerson: Word('отсасывает', 3),
  plural1stPerson: Word('отсасываем', 3),
  plural2ndPerson: Word('отсасываете', 3),
  plural3rdPerson: Word('отсасывают', 3),
  masculinePast: Word('отсасывал', 3),
  femininePast: Word('отсасывала', 3),
  neuterPast: Word('отсасывало', 3),
  pluralPast: Word('отсасывали', 3),
  imperativeInformal: Word('отсасывай', 3),
  imperativeFormal: Word('отсасывайте', 3),
  imperfect: ['отсосать'],
};

perfectVerbs.set(отсасывать.name.text, отсасывать);

export { отсасывать };