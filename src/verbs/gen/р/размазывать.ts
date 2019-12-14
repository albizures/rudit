import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размазывать: PerfectVerb = {
  name: Word('размазывать', 4),
  singular1stPerson: Word('размазываю', 4),
  singular2ndPerson: Word('размазываешь', 4),
  singular3rdPerson: Word('размазывает', 4),
  plural1stPerson: Word('размазываем', 4),
  plural2ndPerson: Word('размазываете', 4),
  plural3rdPerson: Word('размазывают', 4),
  masculinePast: Word('размазывал', 4),
  femininePast: Word('размазывала', 4),
  neuterPast: Word('размазывало', 4),
  pluralPast: Word('размазывали', 4),
  imperativeInformal: Word('размазывай', 4),
  imperativeFormal: Word('размазывайте', 4),
  imperfect: [],
};

perfectVerbs.set(размазывать.name.text, размазывать);

export { размазывать };