import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплескать: PerfectVerb = {
  name: Word('поплескать', 7),
  singular1stPerson: Word('поплещу', 6),
  singular2ndPerson: Word('поплещешь', 4),
  singular3rdPerson: Word('поплещет', 4),
  plural1stPerson: Word('поплещем', 4),
  plural2ndPerson: Word('поплещете', 4),
  plural3rdPerson: Word('поплещут', 4),
  masculinePast: Word('поплескал', 7),
  femininePast: Word('поплескала', 7),
  neuterPast: Word('поплескало', 7),
  pluralPast: Word('поплескали', 7),
  imperativeInformal: Word('поплещи', 6),
  imperativeFormal: Word('поплещите', 6),
  imperfect: [],
};

perfectVerbs.set(поплескать.name.text, поплескать);

export { поплескать };