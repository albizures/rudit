import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкупить: PerfectVerb = {
  name: Word('выкупить', 1),
  singular1stPerson: Word('выкуплю', 1),
  singular2ndPerson: Word('выкупишь', 1),
  singular3rdPerson: Word('выкупит', 1),
  plural1stPerson: Word('выкупим', 1),
  plural2ndPerson: Word('выкупите', 1),
  plural3rdPerson: Word('выкупят', 1),
  masculinePast: Word('выкупил', 1),
  femininePast: Word('выкупила', 1),
  neuterPast: Word('выкупило', 1),
  pluralPast: Word('выкупили', 1),
  imperativeInformal: Word('выкупи', 1),
  imperativeFormal: Word('выкупите', 1),
  imperfect: [],
};

perfectVerbs.set(выкупить.name.text, выкупить);

export { выкупить };