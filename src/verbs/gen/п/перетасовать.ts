import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перетасовать: PerfectVerb = {
  name: Word('перетасовать', 9),
  singular1stPerson: Word('перетасую', 7),
  singular2ndPerson: Word('перетасуешь', 7),
  singular3rdPerson: Word('перетасует', 7),
  plural1stPerson: Word('перетасуем', 7),
  plural2ndPerson: Word('перетасуете', 7),
  plural3rdPerson: Word('перетасуют', 7),
  masculinePast: Word('перетасовал', 9),
  femininePast: Word('перетасовала', 9),
  neuterPast: Word('перетасовало', 9),
  pluralPast: Word('перетасовали', 9),
  imperativeInformal: Word('перетасуй', 7),
  imperativeFormal: Word('перетасуйте', 7),
  imperfect: [],
};

perfectVerbs.set(перетасовать.name.text, перетасовать);

export { перетасовать };