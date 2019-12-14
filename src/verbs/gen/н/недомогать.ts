import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недомогать: PerfectVerb = {
  name: Word('недомогать', 7),
  singular1stPerson: Word('недомогаю', 7),
  singular2ndPerson: Word('недомогаешь', 7),
  singular3rdPerson: Word('недомогает', 7),
  plural1stPerson: Word('недомогаем', 7),
  plural2ndPerson: Word('недомогаете', 7),
  plural3rdPerson: Word('недомогают', 7),
  masculinePast: Word('недомогал', 7),
  femininePast: Word('недомогала', 7),
  neuterPast: Word('недомогало', 7),
  pluralPast: Word('недомогали', 7),
  imperativeInformal: Word('недомогай', 7),
  imperativeFormal: Word('недомогайте', 7),
  imperfect: [],
};

perfectVerbs.set(недомогать.name.text, недомогать);

export { недомогать };