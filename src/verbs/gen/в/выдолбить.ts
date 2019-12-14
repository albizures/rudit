import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдолбить: PerfectVerb = {
  name: Word('выдолбить', 1),
  singular1stPerson: Word('выдолблю', 1),
  singular2ndPerson: Word('выдолбишь', 1),
  singular3rdPerson: Word('выдолбит', 1),
  plural1stPerson: Word('выдолбим', 1),
  plural2ndPerson: Word('выдолбите', 1),
  plural3rdPerson: Word('выдолбят', 1),
  masculinePast: Word('выдолбил', 1),
  femininePast: Word('выдолбила', 1),
  neuterPast: Word('выдолбило', 1),
  pluralPast: Word('выдолбили', 1),
  imperativeInformal: Word('выдолби', 1),
  imperativeFormal: Word('выдолбите', 1),
  imperfect: [],
};

perfectVerbs.set(выдолбить.name.text, выдолбить);

export { выдолбить };