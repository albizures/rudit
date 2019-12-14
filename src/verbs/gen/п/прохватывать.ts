import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохватывать: PerfectVerb = {
  name: Word('прохватывать', 5),
  singular1stPerson: Word('прохватываю', 5),
  singular2ndPerson: Word('прохватываешь', 5),
  singular3rdPerson: Word('прохватывает', 5),
  plural1stPerson: Word('прохватываем', 5),
  plural2ndPerson: Word('прохватываете', 5),
  plural3rdPerson: Word('прохватывают', 5),
  masculinePast: Word('прохватывал', 5),
  femininePast: Word('прохватывала', 5),
  neuterPast: Word('прохватывало', 5),
  pluralPast: Word('прохватывали', 5),
  imperativeInformal: Word('прохватывай', 5),
  imperativeFormal: Word('прохватывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прохватывать.name.text, прохватывать);

export { прохватывать };