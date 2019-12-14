import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспахать: PerfectVerb = {
  name: Word('вспахать', 5),
  singular1stPerson: Word('вспашу', 5),
  singular2ndPerson: Word('вспашешь', 3),
  singular3rdPerson: Word('вспашет', 3),
  plural1stPerson: Word('вспашем', 3),
  plural2ndPerson: Word('вспашете', 3),
  plural3rdPerson: Word('вспашут', 3),
  masculinePast: Word('вспахал', 5),
  femininePast: Word('вспахала', 5),
  neuterPast: Word('вспахало', 5),
  pluralPast: Word('вспахали', 5),
  imperativeInformal: Word('вспаши', 5),
  imperativeFormal: Word('вспашите', 5),
  imperfect: [],
};

perfectVerbs.set(вспахать.name.text, вспахать);

export { вспахать };