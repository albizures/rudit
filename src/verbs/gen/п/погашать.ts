import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погашать: PerfectVerb = {
  name: Word('погашать', 5),
  singular1stPerson: Word('погашаю', 5),
  singular2ndPerson: Word('погашаешь', 5),
  singular3rdPerson: Word('погашает', 5),
  plural1stPerson: Word('погашаем', 5),
  plural2ndPerson: Word('погашаете', 5),
  plural3rdPerson: Word('погашают', 5),
  masculinePast: Word('погашал', 5),
  femininePast: Word('погашала', 5),
  neuterPast: Word('погашало', 5),
  pluralPast: Word('погашали', 5),
  imperativeInformal: Word('погашай', 5),
  imperativeFormal: Word('погашайте', 5),
  imperfect: [],
};

perfectVerbs.set(погашать.name.text, погашать);

export { погашать };