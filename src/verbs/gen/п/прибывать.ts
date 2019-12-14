import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибывать: PerfectVerb = {
  name: Word('прибывать', 6),
  singular1stPerson: Word('прибываю', 6),
  singular2ndPerson: Word('прибываешь', 6),
  singular3rdPerson: Word('прибывает', 6),
  plural1stPerson: Word('прибываем', 6),
  plural2ndPerson: Word('прибываете', 6),
  plural3rdPerson: Word('прибывают', 6),
  masculinePast: Word('прибывал', 6),
  femininePast: Word('прибывала', 6),
  neuterPast: Word('прибывало', 6),
  pluralPast: Word('прибывали', 6),
  imperativeInformal: Word('прибывай', 6),
  imperativeFormal: Word('прибывайте', 6),
  imperfect: ['прибыть'],
};

perfectVerbs.set(прибывать.name.text, прибывать);

export { прибывать };