import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спарывать: PerfectVerb = {
  name: Word('спарывать', 2),
  singular1stPerson: Word('спарываю', 2),
  singular2ndPerson: Word('спарываешь', 2),
  singular3rdPerson: Word('спарывает', 2),
  plural1stPerson: Word('спарываем', 2),
  plural2ndPerson: Word('спарываете', 2),
  plural3rdPerson: Word('спарывают', 2),
  masculinePast: Word('спарывал', 2),
  femininePast: Word('спарывала', 2),
  neuterPast: Word('спарывало', 2),
  pluralPast: Word('спарывали', 2),
  imperativeInformal: Word('спарывай', 2),
  imperativeFormal: Word('спарывайте', 2),
  imperfect: [],
};

perfectVerbs.set(спарывать.name.text, спарывать);

export { спарывать };