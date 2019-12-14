import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заалеть: PerfectVerb = {
  name: Word('заалеть', 4),
  singular1stPerson: Word('заалею', 4),
  singular2ndPerson: Word('заалеешь', 4),
  singular3rdPerson: Word('заалеет', 4),
  plural1stPerson: Word('заалеем', 4),
  plural2ndPerson: Word('заалеете', 4),
  plural3rdPerson: Word('заалеют', 4),
  masculinePast: Word('заалел', 4),
  femininePast: Word('заалела', 4),
  neuterPast: Word('заалело', 4),
  pluralPast: Word('заалели', 4),
  imperativeInformal: Word('заалей', 4),
  imperativeFormal: Word('заалейте', 4),
  imperfect: [],
};

perfectVerbs.set(заалеть.name.text, заалеть);

export { заалеть };