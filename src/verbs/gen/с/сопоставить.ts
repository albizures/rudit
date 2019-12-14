import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопоставить: PerfectVerb = {
  name: Word('сопоставить', 6),
  singular1stPerson: Word('сопоставлю', 6),
  singular2ndPerson: Word('сопоставишь', 6),
  singular3rdPerson: Word('сопоставит', 6),
  plural1stPerson: Word('сопоставим', 6),
  plural2ndPerson: Word('сопоставите', 6),
  plural3rdPerson: Word('сопоставят', 6),
  masculinePast: Word('сопоставил', 6),
  femininePast: Word('сопоставила', 6),
  neuterPast: Word('сопоставило', 6),
  pluralPast: Word('сопоставили', 6),
  imperativeInformal: Word('сопоставь', 6),
  imperativeFormal: Word('сопоставьте', 6),
  imperfect: [],
};

perfectVerbs.set(сопоставить.name.text, сопоставить);

export { сопоставить };