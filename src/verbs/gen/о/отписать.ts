import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отписать: PerfectVerb = {
  name: Word('отписать', 5),
  singular1stPerson: Word('отпишу', 5),
  singular2ndPerson: Word('отпишешь', 3),
  singular3rdPerson: Word('отпишет', 3),
  plural1stPerson: Word('отпишем', 3),
  plural2ndPerson: Word('отпишете', 3),
  plural3rdPerson: Word('отпишут', 3),
  masculinePast: Word('отписал', 5),
  femininePast: Word('отписала', 5),
  neuterPast: Word('отписало', 5),
  pluralPast: Word('отписали', 5),
  imperativeInformal: Word('отпиши', 5),
  imperativeFormal: Word('отпишите', 5),
  imperfect: [],
};

perfectVerbs.set(отписать.name.text, отписать);

export { отписать };