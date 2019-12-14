import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сглатывать: PerfectVerb = {
  name: Word('сглатывать', 3),
  singular1stPerson: Word('сглатываю', 3),
  singular2ndPerson: Word('сглатываешь', 3),
  singular3rdPerson: Word('сглатывает', 3),
  plural1stPerson: Word('сглатываем', 3),
  plural2ndPerson: Word('сглатываете', 3),
  plural3rdPerson: Word('сглатывают', 3),
  masculinePast: Word('сглатывал', 3),
  femininePast: Word('сглатывала', 3),
  neuterPast: Word('сглатывало', 3),
  pluralPast: Word('сглатывали', 3),
  imperativeInformal: Word('сглатывай', 3),
  imperativeFormal: Word('сглатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(сглатывать.name.text, сглатывать);

export { сглатывать };