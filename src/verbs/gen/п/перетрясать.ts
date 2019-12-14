import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетрясать: PerfectVerb = {
  name: Word('перетрясать', 8),
  singular1stPerson: Word('перетрясаю', 8),
  singular2ndPerson: Word('перетрясаешь', 8),
  singular3rdPerson: Word('перетрясает', 8),
  plural1stPerson: Word('перетрясаем', 8),
  plural2ndPerson: Word('перетрясаете', 8),
  plural3rdPerson: Word('перетрясают', 8),
  masculinePast: Word('перетрясал', 8),
  femininePast: Word('перетрясала', 8),
  neuterPast: Word('перетрясало', 8),
  pluralPast: Word('перетрясали', 8),
  imperativeInformal: Word('перетрясай', 8),
  imperativeFormal: Word('перетрясайте', 8),
  imperfect: [],
};

perfectVerbs.set(перетрясать.name.text, перетрясать);

export { перетрясать };