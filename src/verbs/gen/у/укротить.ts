import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укротить: PerfectVerb = {
  name: Word('укротить', 5),
  singular1stPerson: Word('укрощу', 5),
  singular2ndPerson: Word('укротишь', 5),
  singular3rdPerson: Word('укротит', 5),
  plural1stPerson: Word('укротим', 5),
  plural2ndPerson: Word('укротите', 5),
  plural3rdPerson: Word('укротят', 5),
  masculinePast: Word('укротил', 5),
  femininePast: Word('укротила', 5),
  neuterPast: Word('укротило', 5),
  pluralPast: Word('укротили', 5),
  imperativeInformal: Word('укроти', 5),
  imperativeFormal: Word('укротите', 5),
  imperfect: [],
};

perfectVerbs.set(укротить.name.text, укротить);

export { укротить };