import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкалывать: PerfectVerb = {
  name: Word('подкалывать', 4),
  singular1stPerson: Word('подкалываю', 4),
  singular2ndPerson: Word('подкалываешь', 4),
  singular3rdPerson: Word('подкалывает', 4),
  plural1stPerson: Word('подкалываем', 4),
  plural2ndPerson: Word('подкалываете', 4),
  plural3rdPerson: Word('подкалывают', 4),
  masculinePast: Word('подкалывал', 4),
  femininePast: Word('подкалывала', 4),
  neuterPast: Word('подкалывало', 4),
  pluralPast: Word('подкалывали', 4),
  imperativeInformal: Word('подкалывай', 4),
  imperativeFormal: Word('подкалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкалывать.name.text, подкалывать);

export { подкалывать };