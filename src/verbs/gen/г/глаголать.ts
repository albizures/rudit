import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глаголать: PerfectVerb = {
  name: Word('глаголать', 4),
  singular1stPerson: Word('глаголю', 4),
  singular2ndPerson: Word('глаголешь', 4),
  singular3rdPerson: Word('глаголет', 4),
  plural1stPerson: Word('глаголем', 4),
  plural2ndPerson: Word('глаголете', 4),
  plural3rdPerson: Word('глаголют', 4),
  masculinePast: Word('глаголал', 4),
  femininePast: Word('глаголала', 4),
  neuterPast: Word('глаголало', 4),
  pluralPast: Word('глаголали', 4),
  imperativeInformal: Word('глаголь', 4),
  imperativeFormal: Word('глагольте', 4),
  imperfect: [],
};

perfectVerbs.set(глаголать.name.text, глаголать);

export { глаголать };