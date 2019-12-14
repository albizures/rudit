import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лудить: PerfectVerb = {
  name: Word('лудить', 3),
  singular1stPerson: Word('лужу', 3),
  singular2ndPerson: Word('лудишь', 1),
  singular3rdPerson: Word('лудит', 1),
  plural1stPerson: Word('лудим', 1),
  plural2ndPerson: Word('лудите', 1),
  plural3rdPerson: Word('лудят', 1),
  masculinePast: Word('лудил', 3),
  femininePast: Word('лудила', 3),
  neuterPast: Word('лудило', 3),
  pluralPast: Word('лудили', 3),
  imperativeInformal: Word('луди', 3),
  imperativeFormal: Word('лудите', 3),
  imperfect: [],
};

perfectVerbs.set(лудить.name.text, лудить);

export { лудить };