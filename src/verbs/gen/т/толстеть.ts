import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толстеть: PerfectVerb = {
  name: Word('толстеть', 5),
  singular1stPerson: Word('толстею', 5),
  singular2ndPerson: Word('толстеешь', 5),
  singular3rdPerson: Word('толстеет', 5),
  plural1stPerson: Word('толстеем', 5),
  plural2ndPerson: Word('толстеете', 5),
  plural3rdPerson: Word('толстеют', 5),
  masculinePast: Word('толстел', 5),
  femininePast: Word('толстела', 5),
  neuterPast: Word('толстело', 5),
  pluralPast: Word('толстели', 5),
  imperativeInformal: Word('толстей', 5),
  imperativeFormal: Word('толстейте', 5),
  imperfect: ['потолстеть'],
};

perfectVerbs.set(толстеть.name.text, толстеть);

export { толстеть };