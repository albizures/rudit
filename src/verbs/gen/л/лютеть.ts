import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лютеть: PerfectVerb = {
  name: Word('лютеть', 3),
  singular1stPerson: Word('лютею', 3),
  singular2ndPerson: Word('лютеешь', 3),
  singular3rdPerson: Word('лютеет', 3),
  plural1stPerson: Word('лютеем', 3),
  plural2ndPerson: Word('лютеете', 3),
  plural3rdPerson: Word('лютеют', 3),
  masculinePast: Word('лютел', 3),
  femininePast: Word('лютела', 3),
  neuterPast: Word('лютело', 3),
  pluralPast: Word('лютели', 3),
  imperativeInformal: Word('лютей', 3),
  imperativeFormal: Word('лютейте', 3),
  imperfect: [],
};

perfectVerbs.set(лютеть.name.text, лютеть);

export { лютеть };