import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскладывать: PerfectVerb = {
  name: Word('раскладывать', 5),
  singular1stPerson: Word('раскладываю', 5),
  singular2ndPerson: Word('раскладываешь', 5),
  singular3rdPerson: Word('раскладывает', 5),
  plural1stPerson: Word('раскладываем', 5),
  plural2ndPerson: Word('раскладываете', 5),
  plural3rdPerson: Word('раскладывают', 5),
  masculinePast: Word('раскладывал', 5),
  femininePast: Word('раскладывала', 5),
  neuterPast: Word('раскладывало', 5),
  pluralPast: Word('раскладывали', 5),
  imperativeInformal: Word('раскладывай', 5),
  imperativeFormal: Word('раскладывайте', 5),
  imperfect: [],
};

perfectVerbs.set(раскладывать.name.text, раскладывать);

export { раскладывать };