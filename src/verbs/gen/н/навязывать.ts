import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навязывать: PerfectVerb = {
  name: Word('навязывать', 3),
  singular1stPerson: Word('навязываю', 3),
  singular2ndPerson: Word('навязываешь', 3),
  singular3rdPerson: Word('навязывает', 3),
  plural1stPerson: Word('навязываем', 3),
  plural2ndPerson: Word('навязываете', 3),
  plural3rdPerson: Word('навязывают', 3),
  masculinePast: Word('навязывал', 3),
  femininePast: Word('навязывала', 3),
  neuterPast: Word('навязывало', 3),
  pluralPast: Word('навязывали', 3),
  imperativeInformal: Word('навязывай', 3),
  imperativeFormal: Word('навязывайте', 3),
  imperfect: [],
};

perfectVerbs.set(навязывать.name.text, навязывать);

export { навязывать };