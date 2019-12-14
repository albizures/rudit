import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмахать: PerfectVerb = {
  name: Word('отмахать', 5),
  singular1stPerson: Word('отмашу', 5),
  singular2ndPerson: Word('отмашешь', 3),
  singular3rdPerson: Word('отмашет', 3),
  plural1stPerson: Word('отмашем', 3),
  plural2ndPerson: Word('отмашете', 3),
  plural3rdPerson: Word('отмашут', 3),
  masculinePast: Word('отмахал', 5),
  femininePast: Word('отмахала', 5),
  neuterPast: Word('отмахало', 5),
  pluralPast: Word('отмахали', 5),
  imperativeInformal: Word('отмаши', 5),
  imperativeFormal: Word('отмашите', 5),
  imperfect: [],
};

perfectVerbs.set(отмахать.name.text, отмахать);

export { отмахать };