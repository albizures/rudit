import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надпарывать: PerfectVerb = {
  name: Word('надпарывать', 4),
  singular1stPerson: Word('надпарываю', 4),
  singular2ndPerson: Word('надпарываешь', 4),
  singular3rdPerson: Word('надпарывает', 4),
  plural1stPerson: Word('надпарываем', 4),
  plural2ndPerson: Word('надпарываете', 4),
  plural3rdPerson: Word('надпарывают', 4),
  masculinePast: Word('надпарывал', 4),
  femininePast: Word('надпарывала', 4),
  neuterPast: Word('надпарывало', 4),
  pluralPast: Word('надпарывали', 4),
  imperativeInformal: Word('надпарывай', 4),
  imperativeFormal: Word('надпарывайте', 4),
  imperfect: [],
};

perfectVerbs.set(надпарывать.name.text, надпарывать);

export { надпарывать };