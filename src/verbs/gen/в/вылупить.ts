import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылупить: PerfectVerb = {
  name: Word('вылупить', 1),
  singular1stPerson: Word('вылуплю', 1),
  singular2ndPerson: Word('вылупишь', 1),
  singular3rdPerson: Word('вылупит', 1),
  plural1stPerson: Word('вылупим', 1),
  plural2ndPerson: Word('вылупите', 1),
  plural3rdPerson: Word('вылупят', 1),
  masculinePast: Word('вылупил', 1),
  femininePast: Word('вылупила', 1),
  neuterPast: Word('вылупило', 1),
  pluralPast: Word('вылупили', 1),
  imperativeInformal: Word('вылупи', 1),
  imperativeFormal: Word('вылупите', 1),
  imperfect: [],
};

perfectVerbs.set(вылупить.name.text, вылупить);

export { вылупить };