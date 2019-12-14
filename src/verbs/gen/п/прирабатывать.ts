import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирабатывать: PerfectVerb = {
  name: Word('прирабатывать', 6),
  singular1stPerson: Word('прирабатываю', 6),
  singular2ndPerson: Word('прирабатываешь', 6),
  singular3rdPerson: Word('прирабатывает', 6),
  plural1stPerson: Word('прирабатываем', 6),
  plural2ndPerson: Word('прирабатываете', 6),
  plural3rdPerson: Word('прирабатывают', 6),
  masculinePast: Word('прирабатывал', 6),
  femininePast: Word('прирабатывала', 6),
  neuterPast: Word('прирабатывало', 6),
  pluralPast: Word('прирабатывали', 6),
  imperativeInformal: Word('прирабатывай', 6),
  imperativeFormal: Word('прирабатывайте', 6),
  imperfect: [],
};

perfectVerbs.set(прирабатывать.name.text, прирабатывать);

export { прирабатывать };