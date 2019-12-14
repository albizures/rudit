import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарывать: PerfectVerb = {
  name: Word('зарывать', 5),
  singular1stPerson: Word('зарываю', 5),
  singular2ndPerson: Word('зарываешь', 5),
  singular3rdPerson: Word('зарывает', 5),
  plural1stPerson: Word('зарываем', 5),
  plural2ndPerson: Word('зарываете', 5),
  plural3rdPerson: Word('зарывают', 5),
  masculinePast: Word('зарывал', 5),
  femininePast: Word('зарывала', 5),
  neuterPast: Word('зарывало', 5),
  pluralPast: Word('зарывали', 5),
  imperativeInformal: Word('зарывай', 5),
  imperativeFormal: Word('зарывайте', 5),
  imperfect: [],
};

perfectVerbs.set(зарывать.name.text, зарывать);

export { зарывать };