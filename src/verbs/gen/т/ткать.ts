import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ткать: PerfectVerb = {
  name: Word('ткать', 2),
  singular1stPerson: Word('тку', 2),
  singular2ndPerson: Word('ткёшь', 2),
  singular3rdPerson: Word('ткёт', 2),
  plural1stPerson: Word('ткём', 2),
  plural2ndPerson: Word('ткёте', 2),
  plural3rdPerson: Word('ткут', 2),
  masculinePast: Word('ткал', 2),
  femininePast: Word('ткала', 4),
  neuterPast: Word('ткало', 2),
  pluralPast: Word('ткали', 2),
  imperativeInformal: Word('тки', 2),
  imperativeFormal: Word('тките', 2),
  imperfect: ['соткать'],
};

perfectVerbs.set(ткать.name.text, ткать);

export { ткать };