import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перележать: PerfectVerb = {
  name: Word('перележать', 7),
  singular1stPerson: Word('перележу', 7),
  singular2ndPerson: Word('перележишь', 7),
  singular3rdPerson: Word('перележит', 7),
  plural1stPerson: Word('перележим', 7),
  plural2ndPerson: Word('перележите', 7),
  plural3rdPerson: Word('перележат', 7),
  masculinePast: Word('перележал', 7),
  femininePast: Word('перележала', 7),
  neuterPast: Word('перележало', 7),
  pluralPast: Word('перележали', 7),
  imperativeInformal: Word('перележи', 7),
  imperativeFormal: Word('перележите', 7),
  imperfect: [],
};

perfectVerbs.set(перележать.name.text, перележать);

export { перележать };