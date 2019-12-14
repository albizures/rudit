import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сострогать: PerfectVerb = {
  name: Word('сострогать', 7),
  singular1stPerson: Word('сострогаю', 7),
  singular2ndPerson: Word('сострогаешь', 7),
  singular3rdPerson: Word('сострогает', 7),
  plural1stPerson: Word('сострогаем', 7),
  plural2ndPerson: Word('сострогаете', 7),
  plural3rdPerson: Word('сострогают', 7),
  masculinePast: Word('сострогал', 7),
  femininePast: Word('сострогала', 7),
  neuterPast: Word('сострогало', 7),
  pluralPast: Word('сострогали', 7),
  imperativeInformal: Word('сострогай', 7),
  imperativeFormal: Word('сострогайте', 7),
  imperfect: [],
};

perfectVerbs.set(сострогать.name.text, сострогать);

export { сострогать };