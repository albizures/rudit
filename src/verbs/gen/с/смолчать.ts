import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смолчать: PerfectVerb = {
  name: Word('смолчать', 5),
  singular1stPerson: Word('смолчу', 5),
  singular2ndPerson: Word('смолчишь', 5),
  singular3rdPerson: Word('смолчит', 5),
  plural1stPerson: Word('смолчим', 5),
  plural2ndPerson: Word('смолчите', 5),
  plural3rdPerson: Word('смолчат', 5),
  masculinePast: Word('смолчал', 5),
  femininePast: Word('смолчала', 5),
  neuterPast: Word('смолчало', 5),
  pluralPast: Word('смолчали', 5),
  imperativeInformal: Word('смолчи', 5),
  imperativeFormal: Word('смолчите', 5),
  imperfect: [],
};

perfectVerbs.set(смолчать.name.text, смолчать);

export { смолчать };