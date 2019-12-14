import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерисовать: PerfectVerb = {
  name: Word('перерисовать', 9),
  singular1stPerson: Word('перерисую', 7),
  singular2ndPerson: Word('перерисуешь', 7),
  singular3rdPerson: Word('перерисует', 7),
  plural1stPerson: Word('перерисуем', 7),
  plural2ndPerson: Word('перерисуете', 7),
  plural3rdPerson: Word('перерисуют', 7),
  masculinePast: Word('перерисовал', 9),
  femininePast: Word('перерисовала', 9),
  neuterPast: Word('перерисовало', 9),
  pluralPast: Word('перерисовали', 9),
  imperativeInformal: Word('перерисуй', 7),
  imperativeFormal: Word('перерисуйте', 7),
  imperfect: [],
};

perfectVerbs.set(перерисовать.name.text, перерисовать);

export { перерисовать };