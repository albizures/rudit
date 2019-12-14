import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазывать: PerfectVerb = {
  name: Word('зазывать', 5),
  singular1stPerson: Word('зазываю', 5),
  singular2ndPerson: Word('зазываешь', 5),
  singular3rdPerson: Word('зазывает', 5),
  plural1stPerson: Word('зазываем', 5),
  plural2ndPerson: Word('зазываете', 5),
  plural3rdPerson: Word('зазывают', 5),
  masculinePast: Word('зазывал', 5),
  femininePast: Word('зазывала', 5),
  neuterPast: Word('зазывало', 5),
  pluralPast: Word('зазывали', 5),
  imperativeInformal: Word('зазывай', 5),
  imperativeFormal: Word('зазывайте', 5),
  imperfect: [],
};

perfectVerbs.set(зазывать.name.text, зазывать);

export { зазывать };