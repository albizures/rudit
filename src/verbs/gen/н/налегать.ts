import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налегать: PerfectVerb = {
  name: Word('налегать', 5),
  singular1stPerson: Word('налегаю', 5),
  singular2ndPerson: Word('налегаешь', 5),
  singular3rdPerson: Word('налегает', 5),
  plural1stPerson: Word('налегаем', 5),
  plural2ndPerson: Word('налегаете', 5),
  plural3rdPerson: Word('налегают', 5),
  masculinePast: Word('налегал', 5),
  femininePast: Word('налегала', 5),
  neuterPast: Word('налегало', 5),
  pluralPast: Word('налегали', 5),
  imperativeInformal: Word('налегай', 5),
  imperativeFormal: Word('налегайте', 5),
  imperfect: [],
};

perfectVerbs.set(налегать.name.text, налегать);

export { налегать };