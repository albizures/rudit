import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокладывать: PerfectVerb = {
  name: Word('прокладывать', 5),
  singular1stPerson: Word('прокладываю', 5),
  singular2ndPerson: Word('прокладываешь', 5),
  singular3rdPerson: Word('прокладывает', 5),
  plural1stPerson: Word('прокладываем', 5),
  plural2ndPerson: Word('прокладываете', 5),
  plural3rdPerson: Word('прокладывают', 5),
  masculinePast: Word('прокладывал', 5),
  femininePast: Word('прокладывала', 5),
  neuterPast: Word('прокладывало', 5),
  pluralPast: Word('прокладывали', 5),
  imperativeInformal: Word('прокладывай', 5),
  imperativeFormal: Word('прокладывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прокладывать.name.text, прокладывать);

export { прокладывать };