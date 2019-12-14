import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искалывать: PerfectVerb = {
  name: Word('искалывать', 3),
  singular1stPerson: Word('искалываю', 3),
  singular2ndPerson: Word('искалываешь', 3),
  singular3rdPerson: Word('искалывает', 3),
  plural1stPerson: Word('искалываем', 3),
  plural2ndPerson: Word('искалываете', 3),
  plural3rdPerson: Word('искалывают', 3),
  masculinePast: Word('искалывал', 3),
  femininePast: Word('искалывала', 3),
  neuterPast: Word('искалывало', 3),
  pluralPast: Word('искалывали', 3),
  imperativeInformal: Word('искалывай', 3),
  imperativeFormal: Word('искалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(искалывать.name.text, искалывать);

export { искалывать };