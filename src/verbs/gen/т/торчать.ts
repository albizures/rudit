import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торчать: PerfectVerb = {
  name: Word('торчать', 4),
  singular1stPerson: Word('торчу', 4),
  singular2ndPerson: Word('торчишь', 4),
  singular3rdPerson: Word('торчит', 4),
  plural1stPerson: Word('торчим', 4),
  plural2ndPerson: Word('торчите', 4),
  plural3rdPerson: Word('торчат', 4),
  masculinePast: Word('торчал', 4),
  femininePast: Word('торчала', 4),
  neuterPast: Word('торчало', 4),
  pluralPast: Word('торчали', 4),
  imperativeInformal: Word('торчи', 4),
  imperativeFormal: Word('торчите', 4),
  imperfect: [],
};

perfectVerbs.set(торчать.name.text, торчать);

export { торчать };