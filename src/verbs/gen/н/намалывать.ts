import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намалывать: PerfectVerb = {
  name: Word('намалывать', 3),
  singular1stPerson: Word('намалываю', 3),
  singular2ndPerson: Word('намалываешь', 3),
  singular3rdPerson: Word('намалывает', 3),
  plural1stPerson: Word('намалываем', 3),
  plural2ndPerson: Word('намалываете', 3),
  plural3rdPerson: Word('намалывают', 3),
  masculinePast: Word('намалывал', 3),
  femininePast: Word('намалывала', 3),
  neuterPast: Word('намалывало', 3),
  pluralPast: Word('намалывали', 3),
  imperativeInformal: Word('намалывай', 3),
  imperativeFormal: Word('намалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(намалывать.name.text, намалывать);

export { намалывать };