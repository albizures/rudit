import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обнажить: PerfectVerb = {
  name: Word('обнажить', 5),
  singular1stPerson: Word('обнажу', 5),
  singular2ndPerson: Word('обнажишь', 5),
  singular3rdPerson: Word('обнажит', 5),
  plural1stPerson: Word('обнажим', 5),
  plural2ndPerson: Word('обнажите', 5),
  plural3rdPerson: Word('обнажат', 5),
  masculinePast: Word('обнажил', 5),
  femininePast: Word('обнажила', 5),
  neuterPast: Word('обнажило', 5),
  pluralPast: Word('обнажили', 5),
  imperativeInformal: Word('обнажи', 5),
  imperativeFormal: Word('обнажите', 5),
  imperfect: [],
};

perfectVerbs.set(обнажить.name.text, обнажить);

export { обнажить };