import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омывать: PerfectVerb = {
  name: Word('омывать', 4),
  singular1stPerson: Word('омываю', 4),
  singular2ndPerson: Word('омываешь', 4),
  singular3rdPerson: Word('омывает', 4),
  plural1stPerson: Word('омываем', 4),
  plural2ndPerson: Word('омываете', 4),
  plural3rdPerson: Word('омывают', 4),
  masculinePast: Word('омывал', 4),
  femininePast: Word('омывала', 4),
  neuterPast: Word('омывало', 4),
  pluralPast: Word('омывали', 4),
  imperativeInformal: Word('омывай', 4),
  imperativeFormal: Word('омывайте', 4),
  imperfect: [],
};

perfectVerbs.set(омывать.name.text, омывать);

export { омывать };