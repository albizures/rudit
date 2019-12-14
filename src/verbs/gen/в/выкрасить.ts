import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрасить: PerfectVerb = {
  name: Word('выкрасить', 1),
  singular1stPerson: Word('выкрашу', 1),
  singular2ndPerson: Word('выкрасишь', 1),
  singular3rdPerson: Word('выкрасит', 1),
  plural1stPerson: Word('выкрасим', 1),
  plural2ndPerson: Word('выкрасите', 1),
  plural3rdPerson: Word('выкрасят', 1),
  masculinePast: Word('выкрасил', 1),
  femininePast: Word('выкрасила', 1),
  neuterPast: Word('выкрасило', 1),
  pluralPast: Word('выкрасили', 1),
  imperativeInformal: Word('выкраси//вы'крась', 1),
  imperativeFormal: Word('выкрасьте', 1),
  imperfect: [],
};

perfectVerbs.set(выкрасить.name.text, выкрасить);

export { выкрасить };