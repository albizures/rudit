import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бороновать: PerfectVerb = {
  name: Word('бороновать', 7),
  singular1stPerson: Word('бороную', 5),
  singular2ndPerson: Word('боронуешь', 5),
  singular3rdPerson: Word('боронует', 5),
  plural1stPerson: Word('боронуем', 5),
  plural2ndPerson: Word('боронуете', 5),
  plural3rdPerson: Word('боронуют', 5),
  masculinePast: Word('бороновал', 7),
  femininePast: Word('бороновала', 7),
  neuterPast: Word('бороновало', 7),
  pluralPast: Word('бороновали', 7),
  imperativeInformal: Word('боронуй', 5),
  imperativeFormal: Word('боронуйте', 5),
  imperfect: [],
};

perfectVerbs.set(бороновать.name.text, бороновать);

export { бороновать };