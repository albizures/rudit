import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промолчать: PerfectVerb = {
  name: Word('промолчать', 7),
  singular1stPerson: Word('промолчу', 7),
  singular2ndPerson: Word('промолчишь', 7),
  singular3rdPerson: Word('промолчит', 7),
  plural1stPerson: Word('промолчим', 7),
  plural2ndPerson: Word('промолчите', 7),
  plural3rdPerson: Word('промолчат', 7),
  masculinePast: Word('промолчал', 7),
  femininePast: Word('промолчала', 7),
  neuterPast: Word('промолчало', 7),
  pluralPast: Word('промолчали', 7),
  imperativeInformal: Word('промолчи', 7),
  imperativeFormal: Word('промолчите', 7),
  imperfect: [],
};

perfectVerbs.set(промолчать.name.text, промолчать);

export { промолчать };