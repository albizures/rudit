import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const роптать: PerfectVerb = {
  name: Word('роптать', 4),
  singular1stPerson: Word('ропщу', 4),
  singular2ndPerson: Word('ропщешь', 1),
  singular3rdPerson: Word('ропщет', 1),
  plural1stPerson: Word('ропщем', 1),
  plural2ndPerson: Word('ропщете', 1),
  plural3rdPerson: Word('ропщут', 1),
  masculinePast: Word('роптал', 4),
  femininePast: Word('роптала', 4),
  neuterPast: Word('роптало', 4),
  pluralPast: Word('роптали', 4),
  imperativeInformal: Word('ропщи', 4),
  imperativeFormal: Word('ропщите', 4),
  imperfect: [],
};

perfectVerbs.set(роптать.name.text, роптать);

export { роптать };