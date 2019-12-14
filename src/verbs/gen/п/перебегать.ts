import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебегать: PerfectVerb = {
  name: Word('перебегать', 5),
  singular1stPerson: Word('перебегаю', 5),
  singular2ndPerson: Word('перебегаешь', 5),
  singular3rdPerson: Word('перебегает', 5),
  plural1stPerson: Word('перебегаем', 5),
  plural2ndPerson: Word('перебегаете', 5),
  plural3rdPerson: Word('перебегают', 5),
  masculinePast: Word('перебегал', 5),
  femininePast: Word('перебегала', 5),
  neuterPast: Word('перебегало', 5),
  pluralPast: Word('перебегали', 5),
  imperativeInformal: Word('перебегай', 5),
  imperativeFormal: Word('перебегайте', 5),
  imperfect: [],
};

perfectVerbs.set(перебегать.name.text, перебегать);

export { перебегать };