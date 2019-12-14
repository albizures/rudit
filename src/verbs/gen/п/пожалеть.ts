import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожалеть: PerfectVerb = {
  name: Word('пожалеть', 5),
  singular1stPerson: Word('пожалею', 5),
  singular2ndPerson: Word('пожалеешь', 5),
  singular3rdPerson: Word('пожалеет', 5),
  plural1stPerson: Word('пожалеем', 5),
  plural2ndPerson: Word('пожалеете', 5),
  plural3rdPerson: Word('пожалеют', 5),
  masculinePast: Word('пожалел', 5),
  femininePast: Word('пожалела', 5),
  neuterPast: Word('пожалело', 5),
  pluralPast: Word('пожалели', 5),
  imperativeInformal: Word('пожалей', 5),
  imperativeFormal: Word('пожалейте', 5),
  imperfect: ['жалеть'],
};

perfectVerbs.set(пожалеть.name.text, пожалеть);

export { пожалеть };