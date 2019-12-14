import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обогащать: PerfectVerb = {
  name: Word('обогащать', 6),
  singular1stPerson: Word('обогащаю', 6),
  singular2ndPerson: Word('обогащаешь', 6),
  singular3rdPerson: Word('обогащает', 6),
  plural1stPerson: Word('обогащаем', 6),
  plural2ndPerson: Word('обогащаете', 6),
  plural3rdPerson: Word('обогащают', 6),
  masculinePast: Word('обогащал', 6),
  femininePast: Word('обогащала', 6),
  neuterPast: Word('обогащало', 6),
  pluralPast: Word('обогащали', 6),
  imperativeInformal: Word('обогащай', 6),
  imperativeFormal: Word('обогащайте', 6),
  imperfect: [],
};

perfectVerbs.set(обогащать.name.text, обогащать);

export { обогащать };