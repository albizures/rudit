import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стегать: PerfectVerb = {
  name: Word('стегать', 4),
  singular1stPerson: Word('стегаю', 4),
  singular2ndPerson: Word('стегаешь', 4),
  singular3rdPerson: Word('стегает', 4),
  plural1stPerson: Word('стегаем', 4),
  plural2ndPerson: Word('стегаете', 4),
  plural3rdPerson: Word('стегают', 4),
  masculinePast: Word('стегал', 4),
  femininePast: Word('стегала', 4),
  neuterPast: Word('стегало', 4),
  pluralPast: Word('стегали', 4),
  imperativeInformal: Word('стегай', 4),
  imperativeFormal: Word('стегайте', 4),
  imperfect: [],
};

perfectVerbs.set(стегать.name.text, стегать);

export { стегать };