import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикатывать: PerfectVerb = {
  name: Word('прикатывать', 4),
  singular1stPerson: Word('прикатываю', 4),
  singular2ndPerson: Word('прикатываешь', 4),
  singular3rdPerson: Word('прикатывает', 4),
  plural1stPerson: Word('прикатываем', 4),
  plural2ndPerson: Word('прикатываете', 4),
  plural3rdPerson: Word('прикатывают', 4),
  masculinePast: Word('прикатывал', 4),
  femininePast: Word('прикатывала', 4),
  neuterPast: Word('прикатывало', 4),
  pluralPast: Word('прикатывали', 4),
  imperativeInformal: Word('прикатывай', 4),
  imperativeFormal: Word('прикатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикатывать.name.text, прикатывать);

export { прикатывать };