import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымогать: PerfectVerb = {
  name: Word('вымогать', 5),
  singular1stPerson: Word('вымогаю', 5),
  singular2ndPerson: Word('вымогаешь', 5),
  singular3rdPerson: Word('вымогает', 5),
  plural1stPerson: Word('вымогаем', 5),
  plural2ndPerson: Word('вымогаете', 5),
  plural3rdPerson: Word('вымогают', 5),
  masculinePast: Word('вымогал', 5),
  femininePast: Word('вымогала', 5),
  neuterPast: Word('вымогало', 5),
  pluralPast: Word('вымогали', 5),
  imperativeInformal: Word('вымогай', 5),
  imperativeFormal: Word('вымогайте', 5),
  imperfect: [],
};

perfectVerbs.set(вымогать.name.text, вымогать);

export { вымогать };