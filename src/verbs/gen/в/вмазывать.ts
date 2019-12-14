import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмазывать: PerfectVerb = {
  name: Word('вмазывать', 2),
  singular1stPerson: Word('вмазываю', 2),
  singular2ndPerson: Word('вмазываешь', 2),
  singular3rdPerson: Word('вмазывает', 2),
  plural1stPerson: Word('вмазываем', 2),
  plural2ndPerson: Word('вмазываете', 2),
  plural3rdPerson: Word('вмазывают', 2),
  masculinePast: Word('вмазывал', 2),
  femininePast: Word('вмазывала', 2),
  neuterPast: Word('вмазывало', 2),
  pluralPast: Word('вмазывали', 2),
  imperativeInformal: Word('вмазывай', 2),
  imperativeFormal: Word('вмазывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вмазывать.name.text, вмазывать);

export { вмазывать };