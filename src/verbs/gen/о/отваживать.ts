import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отваживать: PerfectVerb = {
  name: Word('отваживать', 3),
  singular1stPerson: Word('отваживаю', 3),
  singular2ndPerson: Word('отваживаешь', 3),
  singular3rdPerson: Word('отваживает', 3),
  plural1stPerson: Word('отваживаем', 3),
  plural2ndPerson: Word('отваживаете', 3),
  plural3rdPerson: Word('отваживают', 3),
  masculinePast: Word('отваживал', 3),
  femininePast: Word('отваживала', 3),
  neuterPast: Word('отваживало', 3),
  pluralPast: Word('отваживали', 3),
  imperativeInformal: Word('отваживай', 3),
  imperativeFormal: Word('отваживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отваживать.name.text, отваживать);

export { отваживать };