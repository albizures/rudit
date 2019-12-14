import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажарить: PerfectVerb = {
  name: Word('зажарить', 3),
  singular1stPerson: Word('зажарю', 3),
  singular2ndPerson: Word('зажаришь', 3),
  singular3rdPerson: Word('зажарит', 3),
  plural1stPerson: Word('зажарим', 3),
  plural2ndPerson: Word('зажарите', 3),
  plural3rdPerson: Word('зажарят', 3),
  masculinePast: Word('зажарил', 3),
  femininePast: Word('зажарила', 3),
  neuterPast: Word('зажарило', 3),
  pluralPast: Word('зажарили', 3),
  imperativeInformal: Word('зажарь', 3),
  imperativeFormal: Word('зажарьте', 3),
  imperfect: [],
};

perfectVerbs.set(зажарить.name.text, зажарить);

export { зажарить };