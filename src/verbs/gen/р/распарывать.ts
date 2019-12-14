import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распарывать: PerfectVerb = {
  name: Word('распарывать', 4),
  singular1stPerson: Word('распарываю', 4),
  singular2ndPerson: Word('распарываешь', 4),
  singular3rdPerson: Word('распарывает', 4),
  plural1stPerson: Word('распарываем', 4),
  plural2ndPerson: Word('распарываете', 4),
  plural3rdPerson: Word('распарывают', 4),
  masculinePast: Word('распарывал', 4),
  femininePast: Word('распарывала', 4),
  neuterPast: Word('распарывало', 4),
  pluralPast: Word('распарывали', 4),
  imperativeInformal: Word('распарывай', 4),
  imperativeFormal: Word('распарывайте', 4),
  imperfect: [],
};

perfectVerbs.set(распарывать.name.text, распарывать);

export { распарывать };