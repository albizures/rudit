import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмазывать: PerfectVerb = {
  name: Word('отмазывать', 3),
  singular1stPerson: Word('отмазываю', 3),
  singular2ndPerson: Word('отмазываешь', 3),
  singular3rdPerson: Word('отмазывает', 3),
  plural1stPerson: Word('отмазываем', 3),
  plural2ndPerson: Word('отмазываете', 3),
  plural3rdPerson: Word('отмазывают', 3),
  masculinePast: Word('отмазывал', 3),
  femininePast: Word('отмазывала', 3),
  neuterPast: Word('отмазывало', 3),
  pluralPast: Word('отмазывали', 3),
  imperativeInformal: Word('отмазывай', 3),
  imperativeFormal: Word('отмазывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отмазывать.name.text, отмазывать);

export { отмазывать };