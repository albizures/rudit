import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врать: PerfectVerb = {
  name: Word('врать', 2),
  singular1stPerson: Word('вру', 2),
  singular2ndPerson: Word('врёшь', 2),
  singular3rdPerson: Word('врёт', 2),
  plural1stPerson: Word('врём', 2),
  plural2ndPerson: Word('врёте', 4),
  plural3rdPerson: Word('врут', 2),
  masculinePast: Word('врал', 2),
  femininePast: Word('врала', 4),
  neuterPast: Word('врало', 2),
  pluralPast: Word('врали', 2),
  imperativeInformal: Word('ври', 2),
  imperativeFormal: Word('врите', 2),
  imperfect: ['соврать'],
};

perfectVerbs.set(врать.name.text, врать);

export { врать };