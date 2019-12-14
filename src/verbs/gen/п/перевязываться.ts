import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевязываться: PerfectVerb = {
  name: Word('перевязываться', 5),
  singular1stPerson: Word('перевязываюсь', 5),
  singular2ndPerson: Word('перевязываешься', 5),
  singular3rdPerson: Word('перевязывается', 5),
  plural1stPerson: Word('перевязываемся', 5),
  plural2ndPerson: Word('перевязываетесь', 5),
  plural3rdPerson: Word('перевязываются', 5),
  masculinePast: Word('перевязывался', 5),
  femininePast: Word('перевязывалась', 5),
  neuterPast: Word('перевязывалось', 5),
  pluralPast: Word('перевязывались', 5),
  imperativeInformal: Word('перевязывайся', 5),
  imperativeFormal: Word('перевязывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перевязываться.name.text, перевязываться);

export { перевязываться };