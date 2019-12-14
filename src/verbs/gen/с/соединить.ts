import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соединить: PerfectVerb = {
  name: Word('соединить', 6),
  singular1stPerson: Word('соединю', 6),
  singular2ndPerson: Word('соединишь', 6),
  singular3rdPerson: Word('соединит', 6),
  plural1stPerson: Word('соединим', 6),
  plural2ndPerson: Word('соедините', 6),
  plural3rdPerson: Word('соединят', 6),
  masculinePast: Word('соединил', 6),
  femininePast: Word('соединила', 6),
  neuterPast: Word('соединило', 6),
  pluralPast: Word('соединили', 6),
  imperativeInformal: Word('соедини', 6),
  imperativeFormal: Word('соедините', 6),
  imperfect: ['соединять'],
};

perfectVerbs.set(соединить.name.text, соединить);

export { соединить };