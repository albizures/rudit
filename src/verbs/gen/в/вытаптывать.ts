import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытаптывать: PerfectVerb = {
  name: Word('вытаптывать', 3),
  singular1stPerson: Word('вытаптываю', 3),
  singular2ndPerson: Word('вытаптываешь', 3),
  singular3rdPerson: Word('вытаптывает', 3),
  plural1stPerson: Word('вытаптываем', 3),
  plural2ndPerson: Word('вытаптываете', 3),
  plural3rdPerson: Word('вытаптывают', 3),
  masculinePast: Word('вытаптывал', 3),
  femininePast: Word('вытаптывала', 3),
  neuterPast: Word('вытаптывало', 3),
  pluralPast: Word('вытаптывали', 3),
  imperativeInformal: Word('вытаптывай', 3),
  imperativeFormal: Word('вытаптывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вытаптывать.name.text, вытаптывать);

export { вытаптывать };