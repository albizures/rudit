import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрезывать: PerfectVerb = {
  name: Word('изрезывать', 3),
  singular1stPerson: Word('изрезываю', 3),
  singular2ndPerson: Word('изрезываешь', 3),
  singular3rdPerson: Word('изрезывает', 3),
  plural1stPerson: Word('изрезываем', 3),
  plural2ndPerson: Word('изрезываете', 3),
  plural3rdPerson: Word('изрезывают', 3),
  masculinePast: Word('изрезывал', 3),
  femininePast: Word('изрезывала', 3),
  neuterPast: Word('изрезывало', 3),
  pluralPast: Word('изрезывали', 3),
  imperativeInformal: Word('изрезывай', 3),
  imperativeFormal: Word('изрезывайте', 3),
  imperfect: [],
};

perfectVerbs.set(изрезывать.name.text, изрезывать);

export { изрезывать };