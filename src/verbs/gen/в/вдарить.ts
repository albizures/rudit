import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдарить: PerfectVerb = {
  name: Word('вдарить', 2),
  singular1stPerson: Word('вдарю', 2),
  singular2ndPerson: Word('вдаришь', 2),
  singular3rdPerson: Word('вдарит', 2),
  plural1stPerson: Word('вдарим', 2),
  plural2ndPerson: Word('вдарите', 2),
  plural3rdPerson: Word('вдарят', 2),
  masculinePast: Word('вдарил', 2),
  femininePast: Word('вдарила', 2),
  neuterPast: Word('вдарило', 2),
  pluralPast: Word('вдарили', 2),
  imperativeInformal: Word('вдарь', 2),
  imperativeFormal: Word('вдарьте', 2),
  imperfect: [],
};

perfectVerbs.set(вдарить.name.text, вдарить);

export { вдарить };