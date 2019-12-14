import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвинить: PerfectVerb = {
  name: Word('обвинить', 5),
  singular1stPerson: Word('обвиню', 5),
  singular2ndPerson: Word('обвинишь', 5),
  singular3rdPerson: Word('обвинит', 5),
  plural1stPerson: Word('обвиним', 5),
  plural2ndPerson: Word('обвините', 5),
  plural3rdPerson: Word('обвинят', 5),
  masculinePast: Word('обвинил', 5),
  femininePast: Word('обвинила', 5),
  neuterPast: Word('обвинило', 5),
  pluralPast: Word('обвинили', 5),
  imperativeInformal: Word('обвини', 5),
  imperativeFormal: Word('обвините', 5),
  imperfect: ['обвинять'],
};

perfectVerbs.set(обвинить.name.text, обвинить);

export { обвинить };