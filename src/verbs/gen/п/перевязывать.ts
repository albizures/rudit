import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевязывать: PerfectVerb = {
  name: Word('перевязывать', 5),
  singular1stPerson: Word('перевязываю', 5),
  singular2ndPerson: Word('перевязываешь', 5),
  singular3rdPerson: Word('перевязывает', 5),
  plural1stPerson: Word('перевязываем', 5),
  plural2ndPerson: Word('перевязываете', 5),
  plural3rdPerson: Word('перевязывают', 5),
  masculinePast: Word('перевязывал', 5),
  femininePast: Word('перевязывала', 5),
  neuterPast: Word('перевязывало', 5),
  pluralPast: Word('перевязывали', 5),
  imperativeInformal: Word('перевязывай', 5),
  imperativeFormal: Word('перевязывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перевязывать.name.text, перевязывать);

export { перевязывать };