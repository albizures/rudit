import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вписывать: PerfectVerb = {
  name: Word('вписывать', 2),
  singular1stPerson: Word('вписываю', 2),
  singular2ndPerson: Word('вписываешь', 2),
  singular3rdPerson: Word('вписывает', 2),
  plural1stPerson: Word('вписываем', 2),
  plural2ndPerson: Word('вписываете', 2),
  plural3rdPerson: Word('вписывают', 2),
  masculinePast: Word('вписывал', 2),
  femininePast: Word('вписывала', 2),
  neuterPast: Word('вписывало', 2),
  pluralPast: Word('вписывали', 2),
  imperativeInformal: Word('вписывай', 2),
  imperativeFormal: Word('вписывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вписывать.name.text, вписывать);

export { вписывать };