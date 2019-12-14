import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лепить: PerfectVerb = {
  name: Word('лепить', 3),
  singular1stPerson: Word('леплю', 4),
  singular2ndPerson: Word('лепишь', 1),
  singular3rdPerson: Word('лепит', 1),
  plural1stPerson: Word('лепим', 1),
  plural2ndPerson: Word('лепите', 1),
  plural3rdPerson: Word('лепят', 1),
  masculinePast: Word('лепил', 3),
  femininePast: Word('лепила', 3),
  neuterPast: Word('лепило', 3),
  pluralPast: Word('лепили', 3),
  imperativeInformal: Word('лепи', 3),
  imperativeFormal: Word('лепите', 3),
  imperfect: [],
};

perfectVerbs.set(лепить.name.text, лепить);

export { лепить };