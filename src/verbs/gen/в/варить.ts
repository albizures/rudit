import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const варить: PerfectVerb = {
  name: Word('варить', 3),
  singular1stPerson: Word('варю', 3),
  singular2ndPerson: Word('варишь', 1),
  singular3rdPerson: Word('варит', 1),
  plural1stPerson: Word('варим', 1),
  plural2ndPerson: Word('варите', 1),
  plural3rdPerson: Word('варят', 1),
  masculinePast: Word('варил', 3),
  femininePast: Word('варила', 3),
  neuterPast: Word('варило', 3),
  pluralPast: Word('варили', 3),
  imperativeInformal: Word('вари', 3),
  imperativeFormal: Word('варите', 3),
  imperfect: ['сварить'],
};

perfectVerbs.set(варить.name.text, варить);

export { варить };