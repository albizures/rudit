import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const домчать: PerfectVerb = {
  name: Word('домчать', 4),
  singular1stPerson: Word('домчу', 4),
  singular2ndPerson: Word('домчишь', 4),
  singular3rdPerson: Word('домчит', 4),
  plural1stPerson: Word('домчим', 4),
  plural2ndPerson: Word('домчите', 4),
  plural3rdPerson: Word('домчат', 4),
  masculinePast: Word('домчал', 4),
  femininePast: Word('домчала', 4),
  neuterPast: Word('домчало', 4),
  pluralPast: Word('домчали', 4),
  imperativeInformal: Word('домчи', 4),
  imperativeFormal: Word('домчите', 4),
  imperfect: [],
};

perfectVerbs.set(домчать.name.text, домчать);

export { домчать };