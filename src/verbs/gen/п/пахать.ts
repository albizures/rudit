import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пахать: PerfectVerb = {
  name: Word('пахать', 3),
  singular1stPerson: Word('пашу', 3),
  singular2ndPerson: Word('пашешь', 1),
  singular3rdPerson: Word('пашет', 1),
  plural1stPerson: Word('пашем', 1),
  plural2ndPerson: Word('пашете', 1),
  plural3rdPerson: Word('пашут', 1),
  masculinePast: Word('пахал', 3),
  femininePast: Word('пахала', 3),
  neuterPast: Word('пахало', 3),
  pluralPast: Word('пахали', 3),
  imperativeInformal: Word('паши', 3),
  imperativeFormal: Word('пашите', 3),
  imperfect: [],
};

perfectVerbs.set(пахать.name.text, пахать);

export { пахать };