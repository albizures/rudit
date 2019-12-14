import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпарывать: PerfectVerb = {
  name: Word('подпарывать', 4),
  singular1stPerson: Word('подпарываю', 4),
  singular2ndPerson: Word('подпарываешь', 4),
  singular3rdPerson: Word('подпарывает', 4),
  plural1stPerson: Word('подпарываем', 4),
  plural2ndPerson: Word('подпарываете', 4),
  plural3rdPerson: Word('подпарывают', 4),
  masculinePast: Word('подпарывал', 4),
  femininePast: Word('подпарывала', 4),
  neuterPast: Word('подпарывало', 4),
  pluralPast: Word('подпарывали', 4),
  imperativeInformal: Word('подпарывай', 4),
  imperativeFormal: Word('подпарывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подпарывать.name.text, подпарывать);

export { подпарывать };