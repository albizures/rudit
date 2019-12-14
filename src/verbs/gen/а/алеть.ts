import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const алеть: PerfectVerb = {
  name: Word('алеть', 2),
  singular1stPerson: Word('алею', 2),
  singular2ndPerson: Word('алеешь', 2),
  singular3rdPerson: Word('алеет', 2),
  plural1stPerson: Word('алеем', 2),
  plural2ndPerson: Word('алеете', 2),
  plural3rdPerson: Word('алеют', 2),
  masculinePast: Word('алел', 2),
  femininePast: Word('алела', 2),
  neuterPast: Word('алело', 2),
  pluralPast: Word('алели', 2),
  imperativeInformal: Word('алей', 2),
  imperativeFormal: Word('алейте', 2),
  imperfect: [],
};

perfectVerbs.set(алеть.name.text, алеть);

export { алеть };