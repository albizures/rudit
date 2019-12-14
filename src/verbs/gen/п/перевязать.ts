import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевязать: PerfectVerb = {
  name: Word('перевязать', 7),
  singular1stPerson: Word('перевяжу', 7),
  singular2ndPerson: Word('перевяжешь', 5),
  singular3rdPerson: Word('перевяжет', 5),
  plural1stPerson: Word('перевяжем', 5),
  plural2ndPerson: Word('перевяжете', 5),
  plural3rdPerson: Word('перевяжут', 5),
  masculinePast: Word('перевязал', 7),
  femininePast: Word('перевязала', 7),
  neuterPast: Word('перевязало', 7),
  pluralPast: Word('перевязали', 7),
  imperativeInformal: Word('перевяжи', 7),
  imperativeFormal: Word('перевяжите', 7),
  imperfect: [],
};

perfectVerbs.set(перевязать.name.text, перевязать);

export { перевязать };