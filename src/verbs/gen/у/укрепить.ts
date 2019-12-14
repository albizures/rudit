import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрепить: PerfectVerb = {
  name: Word('укрепить', 5),
  singular1stPerson: Word('укреплю', 6),
  singular2ndPerson: Word('укрепишь', 5),
  singular3rdPerson: Word('укрепит', 5),
  plural1stPerson: Word('укрепим', 5),
  plural2ndPerson: Word('укрепите', 5),
  plural3rdPerson: Word('укрепят', 5),
  masculinePast: Word('укрепил', 5),
  femininePast: Word('укрепила', 5),
  neuterPast: Word('укрепило', 5),
  pluralPast: Word('укрепили', 5),
  imperativeInformal: Word('укрепи', 5),
  imperativeFormal: Word('укрепите', 5),
  imperfect: [],
};

perfectVerbs.set(укрепить.name.text, укрепить);

export { укрепить };