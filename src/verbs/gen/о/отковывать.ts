import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отковывать: PerfectVerb = {
  name: Word('отковывать', 3),
  singular1stPerson: Word('отковываю', 3),
  singular2ndPerson: Word('отковываешь', 3),
  singular3rdPerson: Word('отковывает', 3),
  plural1stPerson: Word('отковываем', 3),
  plural2ndPerson: Word('отковываете', 3),
  plural3rdPerson: Word('отковывают', 3),
  masculinePast: Word('отковывал', 3),
  femininePast: Word('отковывала', 3),
  neuterPast: Word('отковывало', 3),
  pluralPast: Word('отковывали', 3),
  imperativeInformal: Word('отковывай', 3),
  imperativeFormal: Word('отковывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отковывать.name.text, отковывать);

export { отковывать };