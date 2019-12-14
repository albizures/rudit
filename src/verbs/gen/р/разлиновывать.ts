import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлиновывать: PerfectVerb = {
  name: Word('разлиновывать', 6),
  singular1stPerson: Word('разлиновываю', 6),
  singular2ndPerson: Word('разлиновываешь', 6),
  singular3rdPerson: Word('разлиновывает', 6),
  plural1stPerson: Word('разлиновываем', 6),
  plural2ndPerson: Word('разлиновываете', 6),
  plural3rdPerson: Word('разлиновывают', 6),
  masculinePast: Word('разлиновывал', 6),
  femininePast: Word('разлиновывала', 6),
  neuterPast: Word('разлиновывало', 6),
  pluralPast: Word('разлиновывали', 6),
  imperativeInformal: Word('разлиновывай', 6),
  imperativeFormal: Word('разлиновывайте', 6),
  imperfect: [],
};

perfectVerbs.set(разлиновывать.name.text, разлиновывать);

export { разлиновывать };