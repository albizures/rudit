import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настрогать: PerfectVerb = {
  name: Word('настрогать', 7),
  singular1stPerson: Word('настрогаю', 7),
  singular2ndPerson: Word('настрогаешь', 7),
  singular3rdPerson: Word('настрогает', 7),
  plural1stPerson: Word('настрогаем', 7),
  plural2ndPerson: Word('настрогаете', 7),
  plural3rdPerson: Word('настрогают', 7),
  masculinePast: Word('настрогал', 7),
  femininePast: Word('настрогала', 7),
  neuterPast: Word('настрогало', 7),
  pluralPast: Word('настрогали', 7),
  imperativeInformal: Word('настрогай', 7),
  imperativeFormal: Word('настрогайте', 7),
  imperfect: [],
};

perfectVerbs.set(настрогать.name.text, настрогать);

export { настрогать };