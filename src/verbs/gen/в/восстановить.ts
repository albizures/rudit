import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восстановить: PerfectVerb = {
  name: Word('восстановить', 9),
  singular1stPerson: Word('восстановлю', 10),
  singular2ndPerson: Word('восстановишь', 7),
  singular3rdPerson: Word('восстановит', 7),
  plural1stPerson: Word('восстановим', 7),
  plural2ndPerson: Word('восстановите', 7),
  plural3rdPerson: Word('восстановят', 7),
  masculinePast: Word('восстановил', 9),
  femininePast: Word('восстановила', 9),
  neuterPast: Word('восстановило', 9),
  pluralPast: Word('восстановили', 9),
  imperativeInformal: Word('восстанови', 9),
  imperativeFormal: Word('восстановите', 9),
  imperfect: [],
};

perfectVerbs.set(восстановить.name.text, восстановить);

export { восстановить };