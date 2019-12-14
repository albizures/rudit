import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докалывать: PerfectVerb = {
  name: Word('докалывать', 3),
  singular1stPerson: Word('докалываю', 3),
  singular2ndPerson: Word('докалываешь', 3),
  singular3rdPerson: Word('докалывает', 3),
  plural1stPerson: Word('докалываем', 3),
  plural2ndPerson: Word('докалываете', 3),
  plural3rdPerson: Word('докалывают', 3),
  masculinePast: Word('докалывал', 3),
  femininePast: Word('докалывала', 3),
  neuterPast: Word('докалывало', 3),
  pluralPast: Word('докалывали', 3),
  imperativeInformal: Word('докалывай', 3),
  imperativeFormal: Word('докалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(докалывать.name.text, докалывать);

export { докалывать };