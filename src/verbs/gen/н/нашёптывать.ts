import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашёптывать: PerfectVerb = {
  name: Word('нашёптывать', 1),
  singular1stPerson: Word('нашёптываю', 1),
  singular2ndPerson: Word('нашёптываешь', 1),
  singular3rdPerson: Word('нашёптывает', 1),
  plural1stPerson: Word('нашёптываем', 1),
  plural2ndPerson: Word('нашёптываете', 1),
  plural3rdPerson: Word('нашёптывают', 1),
  masculinePast: Word('нашёптывал', 1),
  femininePast: Word('нашёптывала', 1),
  neuterPast: Word('нашёптывало', 1),
  pluralPast: Word('нашёптывали', 1),
  imperativeInformal: Word('нашёптывай', 1),
  imperativeFormal: Word('нашёптывайте', 1),
  imperfect: [],
};

perfectVerbs.set(нашёптывать.name.text, нашёптывать);

export { нашёптывать };