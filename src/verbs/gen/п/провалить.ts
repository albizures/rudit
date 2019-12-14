import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провалить: PerfectVerb = {
  name: Word('провалить', 6),
  singular1stPerson: Word('провалю', 6),
  singular2ndPerson: Word('провалишь', 4),
  singular3rdPerson: Word('провалит', 4),
  plural1stPerson: Word('провалим', 4),
  plural2ndPerson: Word('провалите', 4),
  plural3rdPerson: Word('провалят', 4),
  masculinePast: Word('провалил', 6),
  femininePast: Word('провалила', 6),
  neuterPast: Word('провалило', 6),
  pluralPast: Word('провалили', 6),
  imperativeInformal: Word('провали', 6),
  imperativeFormal: Word('провалите', 6),
  imperfect: [],
};

perfectVerbs.set(провалить.name.text, провалить);

export { провалить };