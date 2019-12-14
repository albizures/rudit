import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const критиканствовать: PerfectVerb = {
  name: Word('критиканствовать', 6),
  singular1stPerson: Word('критиканствую', 6),
  singular2ndPerson: Word('критиканствуешь', 6),
  singular3rdPerson: Word('критиканствует', 6),
  plural1stPerson: Word('критиканствуем', 6),
  plural2ndPerson: Word('критиканствуете', 6),
  plural3rdPerson: Word('критиканствуют', 6),
  masculinePast: Word('критиканствовал', 6),
  femininePast: Word('критиканствовала', 6),
  neuterPast: Word('критиканствовало', 6),
  pluralPast: Word('критиканствовали', 6),
  imperativeInformal: Word('критиканствуй', 6),
  imperativeFormal: Word('критиканствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(критиканствовать.name.text, критиканствовать);

export { критиканствовать };