import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпарывать: PerfectVerb = {
  name: Word('отпарывать', 3),
  singular1stPerson: Word('отпарываю', 3),
  singular2ndPerson: Word('отпарываешь', 3),
  singular3rdPerson: Word('отпарывает', 3),
  plural1stPerson: Word('отпарываем', 3),
  plural2ndPerson: Word('отпарываете', 3),
  plural3rdPerson: Word('отпарывают', 3),
  masculinePast: Word('отпарывал', 3),
  femininePast: Word('отпарывала', 3),
  neuterPast: Word('отпарывало', 3),
  pluralPast: Word('отпарывали', 3),
  imperativeInformal: Word('отпарывай', 3),
  imperativeFormal: Word('отпарывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отпарывать.name.text, отпарывать);

export { отпарывать };