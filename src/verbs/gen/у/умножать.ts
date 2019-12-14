import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умножать: PerfectVerb = {
  name: Word('умножать', 5),
  singular1stPerson: Word('умножаю', 5),
  singular2ndPerson: Word('умножаешь', 5),
  singular3rdPerson: Word('умножает', 5),
  plural1stPerson: Word('умножаем', 5),
  plural2ndPerson: Word('умножаете', 5),
  plural3rdPerson: Word('умножают', 5),
  masculinePast: Word('умножал', 5),
  femininePast: Word('умножала', 5),
  neuterPast: Word('умножало', 5),
  pluralPast: Word('умножали', 5),
  imperativeInformal: Word('умножай', 5),
  imperativeFormal: Word('умножайте', 5),
  imperfect: [],
};

perfectVerbs.set(умножать.name.text, умножать);

export { умножать };