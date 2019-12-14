import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хорошеть: PerfectVerb = {
  name: Word('хорошеть', 5),
  singular1stPerson: Word('хорошею', 5),
  singular2ndPerson: Word('хорошеешь', 5),
  singular3rdPerson: Word('хорошеет', 5),
  plural1stPerson: Word('хорошеем', 5),
  plural2ndPerson: Word('хорошеете', 5),
  plural3rdPerson: Word('хорошеют', 5),
  masculinePast: Word('хорошел', 5),
  femininePast: Word('хорошела', 5),
  neuterPast: Word('хорошело', 5),
  pluralPast: Word('хорошели', 5),
  imperativeInformal: Word('хорошей', 5),
  imperativeFormal: Word('хорошейте', 5),
  imperfect: [],
};

perfectVerbs.set(хорошеть.name.text, хорошеть);

export { хорошеть };