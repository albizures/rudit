import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрадывать: PerfectVerb = {
  name: Word('раскрадывать', 5),
  singular1stPerson: Word('раскрадываю', 5),
  singular2ndPerson: Word('раскрадываешь', 5),
  singular3rdPerson: Word('раскрадывает', 5),
  plural1stPerson: Word('раскрадываем', 5),
  plural2ndPerson: Word('раскрадываете', 5),
  plural3rdPerson: Word('раскрадывают', 5),
  masculinePast: Word('раскрадывал', 5),
  femininePast: Word('раскрадывала', 5),
  neuterPast: Word('раскрадывало', 5),
  pluralPast: Word('раскрадывали', 5),
  imperativeInformal: Word('раскрадывай', 5),
  imperativeFormal: Word('раскрадывайте', 5),
  imperfect: [],
};

perfectVerbs.set(раскрадывать.name.text, раскрадывать);

export { раскрадывать };