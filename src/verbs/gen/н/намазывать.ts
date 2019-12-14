import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намазывать: PerfectVerb = {
  name: Word('намазывать', 3),
  singular1stPerson: Word('намазываю', 3),
  singular2ndPerson: Word('намазываешь', 3),
  singular3rdPerson: Word('намазывает', 3),
  plural1stPerson: Word('намазываем', 3),
  plural2ndPerson: Word('намазываете', 3),
  plural3rdPerson: Word('намазывают', 3),
  masculinePast: Word('намазывал', 3),
  femininePast: Word('намазывала', 3),
  neuterPast: Word('намазывало', 3),
  pluralPast: Word('намазывали', 3),
  imperativeInformal: Word('намазывай', 3),
  imperativeFormal: Word('намазывайте', 3),
  imperfect: [],
};

perfectVerbs.set(намазывать.name.text, намазывать);

export { намазывать };