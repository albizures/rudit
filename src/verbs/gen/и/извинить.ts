import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извинить: PerfectVerb = {
  name: Word('извинить', 5),
  singular1stPerson: Word('извиню', 5),
  singular2ndPerson: Word('извинишь', 5),
  singular3rdPerson: Word('извинит', 5),
  plural1stPerson: Word('извиним', 5),
  plural2ndPerson: Word('извините', 5),
  plural3rdPerson: Word('извинят', 5),
  masculinePast: Word('извинил', 5),
  femininePast: Word('извинила', 5),
  neuterPast: Word('извинило', 5),
  pluralPast: Word('извинили', 5),
  imperativeInformal: Word('извини', 5),
  imperativeFormal: Word('извините', 5),
  imperfect: ['извинять'],
};

perfectVerbs.set(извинить.name.text, извинить);

export { извинить };