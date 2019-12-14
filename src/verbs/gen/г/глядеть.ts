import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глядеть: PerfectVerb = {
  name: Word('глядеть', 4),
  singular1stPerson: Word('гляжу', 4),
  singular2ndPerson: Word('глядишь', 4),
  singular3rdPerson: Word('глядит', 4),
  plural1stPerson: Word('глядим', 4),
  plural2ndPerson: Word('глядите', 4),
  plural3rdPerson: Word('глядят', 4),
  masculinePast: Word('глядел', 4),
  femininePast: Word('глядела', 4),
  neuterPast: Word('глядело', 4),
  pluralPast: Word('глядели', 4),
  imperativeInformal: Word('гляди', 4),
  imperativeFormal: Word('глядите', 4),
  imperfect: ['взглянуть','глянуть','поглядеть'],
};

perfectVerbs.set(глядеть.name.text, глядеть);

export { глядеть };