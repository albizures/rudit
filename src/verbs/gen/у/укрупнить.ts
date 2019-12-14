import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрупнить: PerfectVerb = {
  name: Word('укрупнить', 6),
  singular1stPerson: Word('укрупню', 6),
  singular2ndPerson: Word('укрупнишь', 6),
  singular3rdPerson: Word('укрупнит', 6),
  plural1stPerson: Word('укрупним', 6),
  plural2ndPerson: Word('укрупните', 6),
  plural3rdPerson: Word('укрупнят', 6),
  masculinePast: Word('укрупнил', 6),
  femininePast: Word('укрупнила', 6),
  neuterPast: Word('укрупнило', 6),
  pluralPast: Word('укрупнили', 6),
  imperativeInformal: Word('укрупни', 6),
  imperativeFormal: Word('укрупните', 6),
  imperfect: [],
};

perfectVerbs.set(укрупнить.name.text, укрупнить);

export { укрупнить };