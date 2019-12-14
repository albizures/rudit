import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нажарить: PerfectVerb = {
  name: Word('нажарить', 3),
  singular1stPerson: Word('нажарю', 3),
  singular2ndPerson: Word('нажаришь', 3),
  singular3rdPerson: Word('нажарит', 3),
  plural1stPerson: Word('нажарим', 3),
  plural2ndPerson: Word('нажарите', 3),
  plural3rdPerson: Word('нажарят', 3),
  masculinePast: Word('нажарил', 3),
  femininePast: Word('нажарила', 3),
  neuterPast: Word('нажарило', 3),
  pluralPast: Word('нажарили', 3),
  imperativeInformal: Word('нажарь', 3),
  imperativeFormal: Word('нажарьте', 3),
  imperfect: [],
};

perfectVerbs.set(нажарить.name.text, нажарить);

export { нажарить };