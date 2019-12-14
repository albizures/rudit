import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const урезать: PerfectVerb = {
  name: Word('урезать', 4),
  singular1stPerson: Word('урезаю', 4),
  singular2ndPerson: Word('урезаешь', 4),
  singular3rdPerson: Word('урезает', 4),
  plural1stPerson: Word('урезаем', 4),
  plural2ndPerson: Word('урезаете', 4),
  plural3rdPerson: Word('урезают', 4),
  masculinePast: Word('урезал', 4),
  femininePast: Word('урезала', 4),
  neuterPast: Word('урезало', 4),
  pluralPast: Word('урезали', 4),
  imperativeInformal: Word('урезай', 4),
  imperativeFormal: Word('урезайте', 4),
  imperfect: [],
};

perfectVerbs.set(урезать.name.text, урезать);

export { урезать };