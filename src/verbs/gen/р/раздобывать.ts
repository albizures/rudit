import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздобывать: PerfectVerb = {
  name: Word('раздобывать', 8),
  singular1stPerson: Word('раздобываю', 8),
  singular2ndPerson: Word('раздобываешь', 8),
  singular3rdPerson: Word('раздобывает', 8),
  plural1stPerson: Word('раздобываем', 8),
  plural2ndPerson: Word('раздобываете', 8),
  plural3rdPerson: Word('раздобывают', 8),
  masculinePast: Word('раздобывал', 8),
  femininePast: Word('раздобывала', 8),
  neuterPast: Word('раздобывало', 8),
  pluralPast: Word('раздобывали', 8),
  imperativeInformal: Word('раздобывай', 8),
  imperativeFormal: Word('раздобывайте', 8),
  imperfect: [],
};

perfectVerbs.set(раздобывать.name.text, раздобывать);

export { раздобывать };