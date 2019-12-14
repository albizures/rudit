import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рукоплескать: PerfectVerb = {
  name: Word('рукоплескать', 9),
  singular1stPerson: Word('рукоплещу', 8),
  singular2ndPerson: Word('рукоплещешь', 6),
  singular3rdPerson: Word('рукоплещет', 6),
  plural1stPerson: Word('рукоплещем', 6),
  plural2ndPerson: Word('рукоплещете', 6),
  plural3rdPerson: Word('рукоплещут', 6),
  masculinePast: Word('рукоплескал', 9),
  femininePast: Word('рукоплескала', 9),
  neuterPast: Word('рукоплескало', 9),
  pluralPast: Word('рукоплескали', 9),
  imperativeInformal: Word('рукоплещи', 8),
  imperativeFormal: Word('рукоплещите', 8),
  imperfect: [],
};

perfectVerbs.set(рукоплескать.name.text, рукоплескать);

export { рукоплескать };