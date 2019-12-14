import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмарывать: PerfectVerb = {
  name: Word('обмарывать', 3),
  singular1stPerson: Word('обмарываю', 3),
  singular2ndPerson: Word('обмарываешь', 3),
  singular3rdPerson: Word('обмарывает', 3),
  plural1stPerson: Word('обмарываем', 3),
  plural2ndPerson: Word('обмарываете', 3),
  plural3rdPerson: Word('обмарывают', 3),
  masculinePast: Word('обмарывал', 3),
  femininePast: Word('обмарывала', 3),
  neuterPast: Word('обмарывало', 3),
  pluralPast: Word('обмарывали', 3),
  imperativeInformal: Word('обмарывай', 3),
  imperativeFormal: Word('обмарывайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмарывать.name.text, обмарывать);

export { обмарывать };