import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцеживать: PerfectVerb = {
  name: Word('отцеживать', 3),
  singular1stPerson: Word('отцеживаю', 3),
  singular2ndPerson: Word('отцеживаешь', 3),
  singular3rdPerson: Word('отцеживает', 3),
  plural1stPerson: Word('отцеживаем', 3),
  plural2ndPerson: Word('отцеживаете', 3),
  plural3rdPerson: Word('отцеживают', 3),
  masculinePast: Word('отцеживал', 3),
  femininePast: Word('отцеживала', 3),
  neuterPast: Word('отцеживало', 3),
  pluralPast: Word('отцеживали', 3),
  imperativeInformal: Word('отцеживай', 3),
  imperativeFormal: Word('отцеживайте', 3),
  imperfect: [],
};

perfectVerbs.set(отцеживать.name.text, отцеживать);

export { отцеживать };