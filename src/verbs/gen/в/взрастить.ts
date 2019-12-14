import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрастить: PerfectVerb = {
  name: Word('взрастить', 6),
  singular1stPerson: Word('взращу', 5),
  singular2ndPerson: Word('взрастишь', 6),
  singular3rdPerson: Word('взрастит', 6),
  plural1stPerson: Word('взрастим', 6),
  plural2ndPerson: Word('взрастите', 6),
  plural3rdPerson: Word('взрастят', 6),
  masculinePast: Word('взрастил', 6),
  femininePast: Word('взрастила', 6),
  neuterPast: Word('взрастило', 6),
  pluralPast: Word('взрастили', 6),
  imperativeInformal: Word('взрасти', 6),
  imperativeFormal: Word('взрастите', 6),
  imperfect: [],
};

perfectVerbs.set(взрастить.name.text, взрастить);

export { взрастить };