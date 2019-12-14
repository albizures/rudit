import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвыкнуть: PerfectVerb = {
  name: Word('отвыкнуть', 3),
  singular1stPerson: Word('отвыкну', 3),
  singular2ndPerson: Word('отвыкнешь', 3),
  singular3rdPerson: Word('отвыкнет', 3),
  plural1stPerson: Word('отвыкнем', 3),
  plural2ndPerson: Word('отвыкнете', 3),
  plural3rdPerson: Word('отвыкнут', 3),
  masculinePast: Word('отвык', 3),
  femininePast: Word('отвыкла', 3),
  neuterPast: Word('отвыкло', 3),
  pluralPast: Word('отвыкли', 3),
  imperativeInformal: Word('отвыкни', 3),
  imperativeFormal: Word('отвыкните', 3),
  imperfect: [],
};

perfectVerbs.set(отвыкнуть.name.text, отвыкнуть);

export { отвыкнуть };