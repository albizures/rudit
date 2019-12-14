import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдавить: PerfectVerb = {
  name: Word('вдавить', 4),
  singular1stPerson: Word('вдавлю', 5),
  singular2ndPerson: Word('вдавишь', 2),
  singular3rdPerson: Word('вдавит', 2),
  plural1stPerson: Word('вдавим', 2),
  plural2ndPerson: Word('вдавите', 2),
  plural3rdPerson: Word('вдавят', 2),
  masculinePast: Word('вдавил', 4),
  femininePast: Word('вдавила', 4),
  neuterPast: Word('вдавило', 4),
  pluralPast: Word('вдавили', 4),
  imperativeInformal: Word('вдави', 4),
  imperativeFormal: Word('вдавите', 4),
  imperfect: [],
};

perfectVerbs.set(вдавить.name.text, вдавить);

export { вдавить };