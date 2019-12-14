import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const причалить: PerfectVerb = {
  name: Word('причалить', 4),
  singular1stPerson: Word('причалю', 4),
  singular2ndPerson: Word('причалишь', 4),
  singular3rdPerson: Word('причалит', 4),
  plural1stPerson: Word('причалим', 4),
  plural2ndPerson: Word('причалите', 4),
  plural3rdPerson: Word('причалят', 4),
  masculinePast: Word('причалил', 4),
  femininePast: Word('причалила', 4),
  neuterPast: Word('причалило', 4),
  pluralPast: Word('причалили', 4),
  imperativeInformal: Word('причаль', 4),
  imperativeFormal: Word('причальте', 4),
  imperfect: [],
};

perfectVerbs.set(причалить.name.text, причалить);

export { причалить };