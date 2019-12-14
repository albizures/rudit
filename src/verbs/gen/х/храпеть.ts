import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const храпеть: PerfectVerb = {
  name: Word('храпеть', 4),
  singular1stPerson: Word('храплю', 5),
  singular2ndPerson: Word('храпишь', 4),
  singular3rdPerson: Word('храпит', 4),
  plural1stPerson: Word('храпим', 4),
  plural2ndPerson: Word('храпите', 4),
  plural3rdPerson: Word('храпят', 4),
  masculinePast: Word('храпел', 4),
  femininePast: Word('храпела', 4),
  neuterPast: Word('храпело', 4),
  pluralPast: Word('храпели', 4),
  imperativeInformal: Word('храпи', 4),
  imperativeFormal: Word('храпите', 4),
  imperfect: ['захрапеть','похрапеть'],
};

perfectVerbs.set(храпеть.name.text, храпеть);

export { храпеть };