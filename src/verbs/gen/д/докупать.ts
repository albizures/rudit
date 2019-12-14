import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докупать: PerfectVerb = {
  name: Word('докупать', 5),
  singular1stPerson: Word('докупаю', 5),
  singular2ndPerson: Word('докупаешь', 5),
  singular3rdPerson: Word('докупает', 5),
  plural1stPerson: Word('докупаем', 5),
  plural2ndPerson: Word('докупаете', 5),
  plural3rdPerson: Word('докупают', 5),
  masculinePast: Word('докупал', 5),
  femininePast: Word('докупала', 5),
  neuterPast: Word('докупало', 5),
  pluralPast: Word('докупали', 5),
  imperativeInformal: Word('докупай', 5),
  imperativeFormal: Word('докупайте', 5),
  imperfect: [],
};

perfectVerbs.set(докупать.name.text, докупать);

export { докупать };