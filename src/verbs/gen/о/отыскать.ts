import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыскать: PerfectVerb = {
  name: Word('отыскать', 5),
  singular1stPerson: Word('отыщу', 4),
  singular2ndPerson: Word('отыщешь', 2),
  singular3rdPerson: Word('отыщет', 2),
  plural1stPerson: Word('отыщем', 2),
  plural2ndPerson: Word('отыщете', 2),
  plural3rdPerson: Word('отыщут', 2),
  masculinePast: Word('отыскал', 5),
  femininePast: Word('отыскала', 5),
  neuterPast: Word('отыскало', 5),
  pluralPast: Word('отыскали', 5),
  imperativeInformal: Word('отыщи', 4),
  imperativeFormal: Word('отыщите', 4),
  imperfect: [],
};

perfectVerbs.set(отыскать.name.text, отыскать);

export { отыскать };