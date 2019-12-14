import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нащипать: PerfectVerb = {
  name: Word('нащипать', 5),
  singular1stPerson: Word('нащиплю', 6),
  singular2ndPerson: Word('нащиплешь', 3),
  singular3rdPerson: Word('нащиплет', 3),
  plural1stPerson: Word('нащиплем', 3),
  plural2ndPerson: Word('нащиплете', 3),
  plural3rdPerson: Word('нащиплют', 3),
  masculinePast: Word('нащипал', 5),
  femininePast: Word('нащипала', 5),
  neuterPast: Word('нащипало', 5),
  pluralPast: Word('нащипали', 5),
  imperativeInformal: Word('нащипли', 6),
  imperativeFormal: Word('нащиплите', 6),
  imperfect: [],
};

perfectVerbs.set(нащипать.name.text, нащипать);

export { нащипать };