import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истаптывать: PerfectVerb = {
  name: Word('истаптывать', 3),
  singular1stPerson: Word('истаптываю', 3),
  singular2ndPerson: Word('истаптываешь', 3),
  singular3rdPerson: Word('истаптывает', 3),
  plural1stPerson: Word('истаптываем', 3),
  plural2ndPerson: Word('истаптываете', 3),
  plural3rdPerson: Word('истаптывают', 3),
  masculinePast: Word('истаптывал', 3),
  femininePast: Word('истаптывала', 3),
  neuterPast: Word('истаптывало', 3),
  pluralPast: Word('истаптывали', 3),
  imperativeInformal: Word('истаптывай', 3),
  imperativeFormal: Word('истаптывайте', 3),
  imperfect: [],
};

perfectVerbs.set(истаптывать.name.text, истаптывать);

export { истаптывать };