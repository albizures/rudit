import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залить: PerfectVerb = {
  name: Word('залить', 3),
  singular1stPerson: Word('залью', 4),
  singular2ndPerson: Word('зальёшь', 4),
  singular3rdPerson: Word('зальёт', 4),
  plural1stPerson: Word('зальём', 4),
  plural2ndPerson: Word('зальёте', 4),
  plural3rdPerson: Word('зальют', 4),
  masculinePast: Word('залил//за'лил', 3),
  femininePast: Word('залила', 5),
  neuterPast: Word('залило//за'лило', 3),
  pluralPast: Word('залили//за'лили', 3),
  imperativeInformal: Word('залей', 3),
  imperativeFormal: Word('залейте', 3),
  imperfect: [],
};

perfectVerbs.set(залить.name.text, залить);

export { залить };