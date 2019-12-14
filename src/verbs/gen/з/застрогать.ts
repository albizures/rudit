import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застрогать: PerfectVerb = {
  name: Word('застрогать', 7),
  singular1stPerson: Word('застрогаю', 7),
  singular2ndPerson: Word('застрогаешь', 7),
  singular3rdPerson: Word('застрогает', 7),
  plural1stPerson: Word('застрогаем', 7),
  plural2ndPerson: Word('застрогаете', 7),
  plural3rdPerson: Word('застрогают', 7),
  masculinePast: Word('застрогал', 7),
  femininePast: Word('застрогала', 7),
  neuterPast: Word('застрогало', 7),
  pluralPast: Word('застрогали', 7),
  imperativeInformal: Word('застрогай', 7),
  imperativeFormal: Word('застрогайте', 7),
  imperfect: [],
};

perfectVerbs.set(застрогать.name.text, застрогать);

export { застрогать };