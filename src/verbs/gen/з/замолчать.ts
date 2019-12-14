import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замолчать: PerfectVerb = {
  name: Word('замолчать', 6),
  singular1stPerson: Word('замолчу', 6),
  singular2ndPerson: Word('замолчишь', 6),
  singular3rdPerson: Word('замолчит', 6),
  plural1stPerson: Word('замолчим', 6),
  plural2ndPerson: Word('замолчите', 6),
  plural3rdPerson: Word('замолчат', 6),
  masculinePast: Word('замолчал', 6),
  femininePast: Word('замолчала', 6),
  neuterPast: Word('замолчало', 6),
  pluralPast: Word('замолчали', 6),
  imperativeInformal: Word('замолчи', 6),
  imperativeFormal: Word('замолчите', 6),
  imperfect: ['замолкать','молчать'],
};

perfectVerbs.set(замолчать.name.text, замолчать);

export { замолчать };