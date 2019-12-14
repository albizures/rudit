import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпарывать: PerfectVerb = {
  name: Word('выпарывать', 3),
  singular1stPerson: Word('выпарываю', 3),
  singular2ndPerson: Word('выпарываешь', 3),
  singular3rdPerson: Word('выпарывает', 3),
  plural1stPerson: Word('выпарываем', 3),
  plural2ndPerson: Word('выпарываете', 3),
  plural3rdPerson: Word('выпарывают', 3),
  masculinePast: Word('выпарывал', 3),
  femininePast: Word('выпарывала', 3),
  neuterPast: Word('выпарывало', 3),
  pluralPast: Word('выпарывали', 3),
  imperativeInformal: Word('выпарывай', 3),
  imperativeFormal: Word('выпарывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выпарывать.name.text, выпарывать);

export { выпарывать };