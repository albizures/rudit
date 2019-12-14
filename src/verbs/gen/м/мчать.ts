import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мчать: PerfectVerb = {
  name: Word('мчать', 2),
  singular1stPerson: Word('мчу', 2),
  singular2ndPerson: Word('мчишь', 2),
  singular3rdPerson: Word('мчит', 2),
  plural1stPerson: Word('мчим', 2),
  plural2ndPerson: Word('мчите', 2),
  plural3rdPerson: Word('мчат', 2),
  masculinePast: Word('мчал', 2),
  femininePast: Word('мчала', 2),
  neuterPast: Word('мчало', 2),
  pluralPast: Word('мчали', 2),
  imperativeInformal: Word('мчи', 2),
  imperativeFormal: Word('мчите', 2),
  imperfect: [],
};

perfectVerbs.set(мчать.name.text, мчать);

export { мчать };