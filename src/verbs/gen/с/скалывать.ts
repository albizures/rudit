import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скалывать: PerfectVerb = {
  name: Word('скалывать', 2),
  singular1stPerson: Word('скалываю', 2),
  singular2ndPerson: Word('скалываешь', 2),
  singular3rdPerson: Word('скалывает', 2),
  plural1stPerson: Word('скалываем', 2),
  plural2ndPerson: Word('скалываете', 2),
  plural3rdPerson: Word('скалывают', 2),
  masculinePast: Word('скалывал', 2),
  femininePast: Word('скалывала', 2),
  neuterPast: Word('скалывало', 2),
  pluralPast: Word('скалывали', 2),
  imperativeInformal: Word('скалывай', 2),
  imperativeFormal: Word('скалывайте', 2),
  imperfect: [],
};

perfectVerbs.set(скалывать.name.text, скалывать);

export { скалывать };