import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымарывать: PerfectVerb = {
  name: Word('вымарывать', 3),
  singular1stPerson: Word('вымарываю', 3),
  singular2ndPerson: Word('вымарываешь', 3),
  singular3rdPerson: Word('вымарывает', 3),
  plural1stPerson: Word('вымарываем', 3),
  plural2ndPerson: Word('вымарываете', 3),
  plural3rdPerson: Word('вымарывают', 3),
  masculinePast: Word('вымарывал', 3),
  femininePast: Word('вымарывала', 3),
  neuterPast: Word('вымарывало', 3),
  pluralPast: Word('вымарывали', 3),
  imperativeInformal: Word('вымарывай', 3),
  imperativeFormal: Word('вымарывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымарывать.name.text, вымарывать);

export { вымарывать };