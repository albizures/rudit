import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прерывать: PerfectVerb = {
  name: Word('прерывать', 6),
  singular1stPerson: Word('прерываю', 6),
  singular2ndPerson: Word('прерываешь', 6),
  singular3rdPerson: Word('прерывает', 6),
  plural1stPerson: Word('прерываем', 6),
  plural2ndPerson: Word('прерываете', 6),
  plural3rdPerson: Word('прерывают', 6),
  masculinePast: Word('прерывал', 6),
  femininePast: Word('прерывала', 6),
  neuterPast: Word('прерывало', 6),
  pluralPast: Word('прерывали', 6),
  imperativeInformal: Word('прерывай', 6),
  imperativeFormal: Word('прерывайте', 6),
  imperfect: ['прервать'],
};

perfectVerbs.set(прерывать.name.text, прерывать);

export { прерывать };