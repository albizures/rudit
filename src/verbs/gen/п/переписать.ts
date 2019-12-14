import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переписать: PerfectVerb = {
  name: Word('переписать', 7),
  singular1stPerson: Word('перепишу', 7),
  singular2ndPerson: Word('перепишешь', 5),
  singular3rdPerson: Word('перепишет', 5),
  plural1stPerson: Word('перепишем', 5),
  plural2ndPerson: Word('перепишете', 5),
  plural3rdPerson: Word('перепишут', 5),
  masculinePast: Word('переписал', 7),
  femininePast: Word('переписала', 7),
  neuterPast: Word('переписало', 7),
  pluralPast: Word('переписали', 7),
  imperativeInformal: Word('перепиши', 7),
  imperativeFormal: Word('перепишите', 7),
  imperfect: [],
};

perfectVerbs.set(переписать.name.text, переписать);

export { переписать };