import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смазывать: PerfectVerb = {
  name: Word('смазывать', 2),
  singular1stPerson: Word('смазываю', 2),
  singular2ndPerson: Word('смазываешь', 2),
  singular3rdPerson: Word('смазывает', 2),
  plural1stPerson: Word('смазываем', 2),
  plural2ndPerson: Word('смазываете', 2),
  plural3rdPerson: Word('смазывают', 2),
  masculinePast: Word('смазывал', 2),
  femininePast: Word('смазывала', 2),
  neuterPast: Word('смазывало', 2),
  pluralPast: Word('смазывали', 2),
  imperativeInformal: Word('смазывай', 2),
  imperativeFormal: Word('смазывайте', 2),
  imperfect: ['смазать'],
};

perfectVerbs.set(смазывать.name.text, смазывать);

export { смазывать };