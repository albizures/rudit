import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отделывать: PerfectVerb = {
  name: Word('отделывать', 3),
  singular1stPerson: Word('отделываю', 3),
  singular2ndPerson: Word('отделываешь', 3),
  singular3rdPerson: Word('отделывает', 3),
  plural1stPerson: Word('отделываем', 3),
  plural2ndPerson: Word('отделываете', 3),
  plural3rdPerson: Word('отделывают', 3),
  masculinePast: Word('отделывал', 3),
  femininePast: Word('отделывала', 3),
  neuterPast: Word('отделывало', 3),
  pluralPast: Word('отделывали', 3),
  imperativeInformal: Word('отделывай', 3),
  imperativeFormal: Word('отделывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отделывать.name.text, отделывать);

export { отделывать };