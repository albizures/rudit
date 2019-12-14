import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перевязаться: PerfectVerb = {
  name: Word('перевязаться', 7),
  singular1stPerson: Word('перевяжусь', 7),
  singular2ndPerson: Word('перевяжешься', 5),
  singular3rdPerson: Word('перевяжется', 5),
  plural1stPerson: Word('перевяжемся', 5),
  plural2ndPerson: Word('перевяжетесь', 5),
  plural3rdPerson: Word('перевяжутся', 5),
  masculinePast: Word('перевязался', 7),
  femininePast: Word('перевязалась', 7),
  neuterPast: Word('перевязалось', 7),
  pluralPast: Word('перевязались', 7),
  imperativeInformal: Word('перевяжись', 7),
  imperativeFormal: Word('перевяжитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перевязаться.name.text, перевязаться);

export { перевязаться };