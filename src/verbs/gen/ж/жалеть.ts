import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жалеть: PerfectVerb = {
  name: Word('жалеть', 3),
  singular1stPerson: Word('жалею', 3),
  singular2ndPerson: Word('жалеешь', 3),
  singular3rdPerson: Word('жалеет', 3),
  plural1stPerson: Word('жалеем', 3),
  plural2ndPerson: Word('жалеете', 3),
  plural3rdPerson: Word('жалеют', 3),
  masculinePast: Word('жалел', 3),
  femininePast: Word('жалела', 3),
  neuterPast: Word('жалело', 3),
  pluralPast: Word('жалели', 3),
  imperativeInformal: Word('жалей', 3),
  imperativeFormal: Word('жалейте', 3),
  imperfect: ['пожалеть'],
};

perfectVerbs.set(жалеть.name.text, жалеть);

export { жалеть };