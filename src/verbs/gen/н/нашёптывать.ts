import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашёптывать: PerfectVerb = {
  name: Word('нашёптывать', 3),
  singular1stPerson: Word('нашёптываю', 3),
  singular2ndPerson: Word('нашёптываешь', 3),
  singular3rdPerson: Word('нашёптывает', 3),
  plural1stPerson: Word('нашёптываем', 3),
  plural2ndPerson: Word('нашёптываете', 3),
  plural3rdPerson: Word('нашёптывают', 3),
  masculinePast: Word('нашёптывал', 3),
  femininePast: Word('нашёптывала', 3),
  neuterPast: Word('нашёптывало', 3),
  pluralPast: Word('нашёптывали', 3),
  imperativeInformal: Word('нашёптывай', 3),
  imperativeFormal: Word('нашёптывайте', 3),
  imperfect: [],
};

perfectVerbs.set(нашёптывать.name.text, нашёптывать);

export { нашёптывать };