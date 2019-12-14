import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помахать: PerfectVerb = {
  name: Word('помахать', 5),
  singular1stPerson: Word('помашу', 5),
  singular2ndPerson: Word('помашешь', 3),
  singular3rdPerson: Word('помашет', 3),
  plural1stPerson: Word('помашем', 3),
  plural2ndPerson: Word('помашете', 3),
  plural3rdPerson: Word('помашут', 3),
  masculinePast: Word('помахал', 5),
  femininePast: Word('помахала', 5),
  neuterPast: Word('помахало', 5),
  pluralPast: Word('помахали', 5),
  imperativeInformal: Word('помаши', 5),
  imperativeFormal: Word('помашите', 5),
  imperfect: [],
};

perfectVerbs.set(помахать.name.text, помахать);

export { помахать };