import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмазывать: PerfectVerb = {
  name: Word('подмазывать', 4),
  singular1stPerson: Word('подмазываю', 4),
  singular2ndPerson: Word('подмазываешь', 4),
  singular3rdPerson: Word('подмазывает', 4),
  plural1stPerson: Word('подмазываем', 4),
  plural2ndPerson: Word('подмазываете', 4),
  plural3rdPerson: Word('подмазывают', 4),
  masculinePast: Word('подмазывал', 4),
  femininePast: Word('подмазывала', 4),
  neuterPast: Word('подмазывало', 4),
  pluralPast: Word('подмазывали', 4),
  imperativeInformal: Word('подмазывай', 4),
  imperativeFormal: Word('подмазывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмазывать.name.text, подмазывать);

export { подмазывать };