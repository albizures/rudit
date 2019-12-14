import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замахать: PerfectVerb = {
  name: Word('замахать', 5),
  singular1stPerson: Word('замашу', 5),
  singular2ndPerson: Word('замашешь', 3),
  singular3rdPerson: Word('замашет', 3),
  plural1stPerson: Word('замашем', 3),
  plural2ndPerson: Word('замашете', 3),
  plural3rdPerson: Word('замашут', 3),
  masculinePast: Word('замахал', 5),
  femininePast: Word('замахала', 5),
  neuterPast: Word('замахало', 5),
  pluralPast: Word('замахали', 5),
  imperativeInformal: Word('замаши', 5),
  imperativeFormal: Word('замашите', 5),
  imperfect: [],
};

perfectVerbs.set(замахать.name.text, замахать);

export { замахать };