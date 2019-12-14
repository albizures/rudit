import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстрелить: PerfectVerb = {
  name: Word('подстрелить', 8),
  singular1stPerson: Word('подстрелю', 8),
  singular2ndPerson: Word('подстрелишь', 6),
  singular3rdPerson: Word('подстрелит', 6),
  plural1stPerson: Word('подстрелим', 6),
  plural2ndPerson: Word('подстрелите', 6),
  plural3rdPerson: Word('подстрелят', 6),
  masculinePast: Word('подстрелил', 8),
  femininePast: Word('подстрелила', 8),
  neuterPast: Word('подстрелило', 8),
  pluralPast: Word('подстрелили', 8),
  imperativeInformal: Word('подстрели', 8),
  imperativeFormal: Word('подстрелите', 8),
  imperfect: ['подстреливать'],
};

perfectVerbs.set(подстрелить.name.text, подстрелить);

export { подстрелить };