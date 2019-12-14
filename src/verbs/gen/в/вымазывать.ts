import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымазывать: PerfectVerb = {
  name: Word('вымазывать', 3),
  singular1stPerson: Word('вымазываю', 3),
  singular2ndPerson: Word('вымазываешь', 3),
  singular3rdPerson: Word('вымазывает', 3),
  plural1stPerson: Word('вымазываем', 3),
  plural2ndPerson: Word('вымазываете', 3),
  plural3rdPerson: Word('вымазывают', 3),
  masculinePast: Word('вымазывал', 3),
  femininePast: Word('вымазывала', 3),
  neuterPast: Word('вымазывало', 3),
  pluralPast: Word('вымазывали', 3),
  imperativeInformal: Word('вымазывай', 3),
  imperativeFormal: Word('вымазывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымазывать.name.text, вымазывать);

export { вымазывать };