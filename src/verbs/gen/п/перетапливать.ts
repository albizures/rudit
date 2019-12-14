import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетапливать: PerfectVerb = {
  name: Word('перетапливать', 5),
  singular1stPerson: Word('перетапливаю', 5),
  singular2ndPerson: Word('перетапливаешь', 5),
  singular3rdPerson: Word('перетапливает', 5),
  plural1stPerson: Word('перетапливаем', 5),
  plural2ndPerson: Word('перетапливаете', 5),
  plural3rdPerson: Word('перетапливают', 5),
  masculinePast: Word('перетапливал', 5),
  femininePast: Word('перетапливала', 5),
  neuterPast: Word('перетапливало', 5),
  pluralPast: Word('перетапливали', 5),
  imperativeInformal: Word('перетапливай', 5),
  imperativeFormal: Word('перетапливайте', 5),
  imperfect: [],
};

perfectVerbs.set(перетапливать.name.text, перетапливать);

export { перетапливать };