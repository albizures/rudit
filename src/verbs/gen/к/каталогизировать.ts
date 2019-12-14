import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const каталогизировать: PerfectVerb = {
  name: Word('каталогизировать', 9),
  singular1stPerson: Word('каталогизирую', 9),
  singular2ndPerson: Word('каталогизируешь', 9),
  singular3rdPerson: Word('каталогизирует', 9),
  plural1stPerson: Word('каталогизируем', 9),
  plural2ndPerson: Word('каталогизируете', 9),
  plural3rdPerson: Word('каталогизируют', 9),
  masculinePast: Word('каталогизировал', 9),
  femininePast: Word('каталогизировала', 9),
  neuterPast: Word('каталогизировало', 9),
  pluralPast: Word('каталогизировали', 9),
  imperativeInformal: Word('каталогизируй', 9),
  imperativeFormal: Word('каталогизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(каталогизировать.name.text, каталогизировать);

export { каталогизировать };