import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пьянить: PerfectVerb = {
  name: Word('пьянить', 4),
  singular1stPerson: Word('пьяню', 4),
  singular2ndPerson: Word('пьянишь', 4),
  singular3rdPerson: Word('пьянит', 4),
  plural1stPerson: Word('пьяним', 4),
  plural2ndPerson: Word('пьяните', 4),
  plural3rdPerson: Word('пьянят', 4),
  masculinePast: Word('пьянил', 4),
  femininePast: Word('пьянила', 4),
  neuterPast: Word('пьянило', 4),
  pluralPast: Word('пьянили', 4),
  imperativeInformal: Word('пьяни', 4),
  imperativeFormal: Word('пьяните', 4),
  imperfect: [],
};

perfectVerbs.set(пьянить.name.text, пьянить);

export { пьянить };