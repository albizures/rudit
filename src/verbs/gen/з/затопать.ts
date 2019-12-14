import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затопать: PerfectVerb = {
  name: Word('затопать', 3),
  singular1stPerson: Word('затопаю', 3),
  singular2ndPerson: Word('затопаешь', 3),
  singular3rdPerson: Word('затопает', 3),
  plural1stPerson: Word('затопаем', 3),
  plural2ndPerson: Word('затопаете', 3),
  plural3rdPerson: Word('затопают', 3),
  masculinePast: Word('затопал', 3),
  femininePast: Word('затопала', 3),
  neuterPast: Word('затопало', 3),
  pluralPast: Word('затопали', 3),
  imperativeInformal: Word('затопай', 3),
  imperativeFormal: Word('затопайте', 3),
  imperfect: [],
};

perfectVerbs.set(затопать.name.text, затопать);

export { затопать };