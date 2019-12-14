import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колупать: PerfectVerb = {
  name: Word('колупать', 5),
  singular1stPerson: Word('колупаю', 5),
  singular2ndPerson: Word('колупаешь', 5),
  singular3rdPerson: Word('колупает', 5),
  plural1stPerson: Word('колупаем', 5),
  plural2ndPerson: Word('колупаете', 5),
  plural3rdPerson: Word('колупают', 5),
  masculinePast: Word('колупал', 5),
  femininePast: Word('колупала', 5),
  neuterPast: Word('колупало', 5),
  pluralPast: Word('колупали', 5),
  imperativeInformal: Word('колупай', 5),
  imperativeFormal: Word('колупайте', 5),
  imperfect: [],
};

perfectVerbs.set(колупать.name.text, колупать);

export { колупать };