import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отламывать: PerfectVerb = {
  name: Word('отламывать', 3),
  singular1stPerson: Word('отламываю', 3),
  singular2ndPerson: Word('отламываешь', 3),
  singular3rdPerson: Word('отламывает', 3),
  plural1stPerson: Word('отламываем', 3),
  plural2ndPerson: Word('отламываете', 3),
  plural3rdPerson: Word('отламывают', 3),
  masculinePast: Word('отламывал', 3),
  femininePast: Word('отламывала', 3),
  neuterPast: Word('отламывало', 3),
  pluralPast: Word('отламывали', 3),
  imperativeInformal: Word('отламывай', 3),
  imperativeFormal: Word('отламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отламывать.name.text, отламывать);

export { отламывать };