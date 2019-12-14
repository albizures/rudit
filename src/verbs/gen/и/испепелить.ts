import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испепелить: PerfectVerb = {
  name: Word('испепелить', 7),
  singular1stPerson: Word('испепелю', 7),
  singular2ndPerson: Word('испепелишь', 7),
  singular3rdPerson: Word('испепелит', 7),
  plural1stPerson: Word('испепелим', 7),
  plural2ndPerson: Word('испепелите', 7),
  plural3rdPerson: Word('испепелят', 7),
  masculinePast: Word('испепелил', 7),
  femininePast: Word('испепелила', 7),
  neuterPast: Word('испепелило', 7),
  pluralPast: Word('испепелили', 7),
  imperativeInformal: Word('испепели', 7),
  imperativeFormal: Word('испепелите', 7),
  imperfect: [],
};

perfectVerbs.set(испепелить.name.text, испепелить);

export { испепелить };