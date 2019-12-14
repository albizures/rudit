import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замазывать: PerfectVerb = {
  name: Word('замазывать', 3),
  singular1stPerson: Word('замазываю', 3),
  singular2ndPerson: Word('замазываешь', 3),
  singular3rdPerson: Word('замазывает', 3),
  plural1stPerson: Word('замазываем', 3),
  plural2ndPerson: Word('замазываете', 3),
  plural3rdPerson: Word('замазывают', 3),
  masculinePast: Word('замазывал', 3),
  femininePast: Word('замазывала', 3),
  neuterPast: Word('замазывало', 3),
  pluralPast: Word('замазывали', 3),
  imperativeInformal: Word('замазывай', 3),
  imperativeFormal: Word('замазывайте', 3),
  imperfect: [],
};

perfectVerbs.set(замазывать.name.text, замазывать);

export { замазывать };