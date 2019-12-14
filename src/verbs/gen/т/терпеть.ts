import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const терпеть: PerfectVerb = {
  name: Word('терпеть', 4),
  singular1stPerson: Word('терплю', 5),
  singular2ndPerson: Word('терпишь', 1),
  singular3rdPerson: Word('терпит', 1),
  plural1stPerson: Word('терпим', 1),
  plural2ndPerson: Word('терпите', 1),
  plural3rdPerson: Word('терпят', 1),
  masculinePast: Word('терпел', 4),
  femininePast: Word('терпела', 4),
  neuterPast: Word('терпело', 4),
  pluralPast: Word('терпели', 4),
  imperativeInformal: Word('терпи', 4),
  imperativeFormal: Word('терпите', 4),
  imperfect: ['потерпеть'],
};

perfectVerbs.set(терпеть.name.text, терпеть);

export { терпеть };