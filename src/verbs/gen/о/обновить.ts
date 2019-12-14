import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обновить: PerfectVerb = {
  name: Word('обновить', 5),
  singular1stPerson: Word('обновлю', 6),
  singular2ndPerson: Word('обновишь', 5),
  singular3rdPerson: Word('обновит', 5),
  plural1stPerson: Word('обновим', 5),
  plural2ndPerson: Word('обновите', 5),
  plural3rdPerson: Word('обновят', 5),
  masculinePast: Word('обновил', 5),
  femininePast: Word('обновила', 5),
  neuterPast: Word('обновило', 5),
  pluralPast: Word('обновили', 5),
  imperativeInformal: Word('обнови', 5),
  imperativeFormal: Word('обновите', 5),
  imperfect: [],
};

perfectVerbs.set(обновить.name.text, обновить);

export { обновить };