import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегорать: PerfectVerb = {
  name: Word('перегорать', 7),
  singular1stPerson: Word('перегораю', 7),
  singular2ndPerson: Word('перегораешь', 7),
  singular3rdPerson: Word('перегорает', 7),
  plural1stPerson: Word('перегораем', 7),
  plural2ndPerson: Word('перегораете', 7),
  plural3rdPerson: Word('перегорают', 7),
  masculinePast: Word('перегорал', 7),
  femininePast: Word('перегорала', 7),
  neuterPast: Word('перегорало', 7),
  pluralPast: Word('перегорали', 7),
  imperativeInformal: Word('перегорай', 7),
  imperativeFormal: Word('перегорайте', 7),
  imperfect: [],
};

perfectVerbs.set(перегорать.name.text, перегорать);

export { перегорать };