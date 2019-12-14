import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const орать: PerfectVerb = {
  name: Word('орать', 2),
  singular1stPerson: Word('ору', 2),
  singular2ndPerson: Word('орёшь', 2),
  singular3rdPerson: Word('орёт', 2),
  plural1stPerson: Word('орём', 2),
  plural2ndPerson: Word('орёте', 2),
  plural3rdPerson: Word('орут', 2),
  masculinePast: Word('орал', 2),
  femininePast: Word('орала', 2),
  neuterPast: Word('орало', 2),
  pluralPast: Word('орали', 2),
  imperativeInformal: Word('ори', 2),
  imperativeFormal: Word('орите', 2),
  imperfect: ['заорать','поорать','наорать'],
};

perfectVerbs.set(орать.name.text, орать);

export { орать };