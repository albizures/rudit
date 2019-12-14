import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вставить: PerfectVerb = {
  name: Word('вставить', 3),
  singular1stPerson: Word('вставлю', 3),
  singular2ndPerson: Word('вставишь', 3),
  singular3rdPerson: Word('вставит', 3),
  plural1stPerson: Word('вставим', 3),
  plural2ndPerson: Word('вставите', 3),
  plural3rdPerson: Word('вставят', 3),
  masculinePast: Word('вставил', 3),
  femininePast: Word('вставила', 3),
  neuterPast: Word('вставило', 3),
  pluralPast: Word('вставили', 3),
  imperativeInformal: Word('вставь', 3),
  imperativeFormal: Word('вставьте', 3),
  imperfect: [],
};

perfectVerbs.set(вставить.name.text, вставить);

export { вставить };