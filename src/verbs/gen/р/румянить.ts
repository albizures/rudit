import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const румянить: PerfectVerb = {
  name: Word('румянить', 3),
  singular1stPerson: Word('румяню', 3),
  singular2ndPerson: Word('румянишь', 3),
  singular3rdPerson: Word('румянит', 3),
  plural1stPerson: Word('румяним', 3),
  plural2ndPerson: Word('румяните', 3),
  plural3rdPerson: Word('румянят', 3),
  masculinePast: Word('румянил', 3),
  femininePast: Word('румянила', 3),
  neuterPast: Word('румянило', 3),
  pluralPast: Word('румянили', 3),
  imperativeInformal: Word('румянь', 3),
  imperativeFormal: Word('румяньте', 3),
  imperfect: [],
};

perfectVerbs.set(румянить.name.text, румянить);

export { румянить };