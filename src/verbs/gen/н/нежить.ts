import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нежить: PerfectVerb = {
  name: Word('нежить', 1),
  singular1stPerson: Word('нежу', 1),
  singular2ndPerson: Word('нежишь', 1),
  singular3rdPerson: Word('нежит', 1),
  plural1stPerson: Word('нежим', 1),
  plural2ndPerson: Word('нежите', 1),
  plural3rdPerson: Word('нежат', 1),
  masculinePast: Word('нежил', 1),
  femininePast: Word('нежила', 1),
  neuterPast: Word('нежило', 1),
  pluralPast: Word('нежили', 1),
  imperativeInformal: Word('нежь', 1),
  imperativeFormal: Word('нежьте', 1),
  imperfect: [],
};

perfectVerbs.set(нежить.name.text, нежить);

export { нежить };