import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпахать: PerfectVerb = {
  name: Word('отпахать', 5),
  singular1stPerson: Word('отпашу', 5),
  singular2ndPerson: Word('отпашешь', 3),
  singular3rdPerson: Word('отпашет', 3),
  plural1stPerson: Word('отпашем', 3),
  plural2ndPerson: Word('отпашете', 3),
  plural3rdPerson: Word('отпашут', 3),
  masculinePast: Word('отпахал', 5),
  femininePast: Word('отпахала', 5),
  neuterPast: Word('отпахало', 5),
  pluralPast: Word('отпахали', 5),
  imperativeInformal: Word('отпаши', 5),
  imperativeFormal: Word('отпашите', 5),
  imperfect: [],
};

perfectVerbs.set(отпахать.name.text, отпахать);

export { отпахать };