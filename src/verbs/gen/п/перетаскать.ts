import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетаскать: PerfectVerb = {
  name: Word('перетаскать', 8),
  singular1stPerson: Word('перетаскаю', 8),
  singular2ndPerson: Word('перетаскаешь', 8),
  singular3rdPerson: Word('перетаскает', 8),
  plural1stPerson: Word('перетаскаем', 8),
  plural2ndPerson: Word('перетаскаете', 8),
  plural3rdPerson: Word('перетаскают', 8),
  masculinePast: Word('перетаскал', 8),
  femininePast: Word('перетаскала', 8),
  neuterPast: Word('перетаскало', 8),
  pluralPast: Word('перетаскали', 8),
  imperativeInformal: Word('перетаскай', 8),
  imperativeFormal: Word('перетаскайте', 8),
  imperfect: [],
};

perfectVerbs.set(перетаскать.name.text, перетаскать);

export { перетаскать };