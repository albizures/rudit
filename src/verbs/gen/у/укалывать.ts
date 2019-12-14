import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укалывать: PerfectVerb = {
  name: Word('укалывать', 2),
  singular1stPerson: Word('укалываю', 2),
  singular2ndPerson: Word('укалываешь', 2),
  singular3rdPerson: Word('укалывает', 2),
  plural1stPerson: Word('укалываем', 2),
  plural2ndPerson: Word('укалываете', 2),
  plural3rdPerson: Word('укалывают', 2),
  masculinePast: Word('укалывал', 2),
  femininePast: Word('укалывала', 2),
  neuterPast: Word('укалывало', 2),
  pluralPast: Word('укалывали', 2),
  imperativeInformal: Word('укалывай', 2),
  imperativeFormal: Word('укалывайте', 2),
  imperfect: [],
};

perfectVerbs.set(укалывать.name.text, укалывать);

export { укалывать };