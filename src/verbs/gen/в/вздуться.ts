import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздуться: PerfectVerb = {
  name: Word('вздуться', 3),
  singular1stPerson: Word('вздуюсь', 3),
  singular2ndPerson: Word('вздуешься', 3),
  singular3rdPerson: Word('вздуется', 3),
  plural1stPerson: Word('вздуемся', 3),
  plural2ndPerson: Word('вздуетесь', 3),
  plural3rdPerson: Word('вздуются', 3),
  masculinePast: Word('вздулся', 3),
  femininePast: Word('вздулась', 3),
  neuterPast: Word('вздулось', 3),
  pluralPast: Word('вздулись', 3),
  imperativeInformal: Word('вздуйся', 3),
  imperativeFormal: Word('вздуйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вздуться.name.text, вздуться);

export { вздуться };