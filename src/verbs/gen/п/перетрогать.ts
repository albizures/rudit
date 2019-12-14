import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетрогать: PerfectVerb = {
  name: Word('перетрогать', 6),
  singular1stPerson: Word('перетрогаю', 6),
  singular2ndPerson: Word('перетрогаешь', 6),
  singular3rdPerson: Word('перетрогает', 6),
  plural1stPerson: Word('перетрогаем', 6),
  plural2ndPerson: Word('перетрогаете', 6),
  plural3rdPerson: Word('перетрогают', 6),
  masculinePast: Word('перетрогал', 6),
  femininePast: Word('перетрогала', 6),
  neuterPast: Word('перетрогало', 6),
  pluralPast: Word('перетрогали', 6),
  imperativeInformal: Word('перетрогай', 6),
  imperativeFormal: Word('перетрогайте', 6),
  imperfect: [],
};

perfectVerbs.set(перетрогать.name.text, перетрогать);

export { перетрогать };