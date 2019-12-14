import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскошелиться: PerfectVerb = {
  name: Word('раскошелиться', 6),
  singular1stPerson: Word('раскошелюсь', 6),
  singular2ndPerson: Word('раскошелишься', 6),
  singular3rdPerson: Word('раскошелится', 6),
  plural1stPerson: Word('раскошелимся', 6),
  plural2ndPerson: Word('раскошелитесь', 6),
  plural3rdPerson: Word('раскошелятся', 6),
  masculinePast: Word('раскошелился', 6),
  femininePast: Word('раскошелилась', 6),
  neuterPast: Word('раскошелилось', 6),
  pluralPast: Word('раскошелились', 6),
  imperativeInformal: Word('раскошелься', 6),
  imperativeFormal: Word('раскошельтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскошелиться.name.text, раскошелиться);

export { раскошелиться };