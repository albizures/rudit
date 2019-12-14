import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помазывать: PerfectVerb = {
  name: Word('помазывать', 3),
  singular1stPerson: Word('помазываю', 3),
  singular2ndPerson: Word('помазываешь', 3),
  singular3rdPerson: Word('помазывает', 3),
  plural1stPerson: Word('помазываем', 3),
  plural2ndPerson: Word('помазываете', 3),
  plural3rdPerson: Word('помазывают', 3),
  masculinePast: Word('помазывал', 3),
  femininePast: Word('помазывала', 3),
  neuterPast: Word('помазывало', 3),
  pluralPast: Word('помазывали', 3),
  imperativeInformal: Word('помазывай', 3),
  imperativeFormal: Word('помазывайте', 3),
  imperfect: ['помазать'],
};

perfectVerbs.set(помазывать.name.text, помазывать);

export { помазывать };