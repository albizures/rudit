import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемазать: PerfectVerb = {
  name: Word('перемазать', 5),
  singular1stPerson: Word('перемажу', 5),
  singular2ndPerson: Word('перемажешь', 5),
  singular3rdPerson: Word('перемажет', 5),
  plural1stPerson: Word('перемажем', 5),
  plural2ndPerson: Word('перемажете', 5),
  plural3rdPerson: Word('перемажут', 5),
  masculinePast: Word('перемазал', 5),
  femininePast: Word('перемазала', 5),
  neuterPast: Word('перемазало', 5),
  pluralPast: Word('перемазали', 5),
  imperativeInformal: Word('перемажь', 5),
  imperativeFormal: Word('перемажьте', 5),
  imperfect: [],
};

perfectVerbs.set(перемазать.name.text, перемазать);

export { перемазать };