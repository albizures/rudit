import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укоротить: PerfectVerb = {
  name: Word('укоротить', 6),
  singular1stPerson: Word('укорочу', 6),
  singular2ndPerson: Word('укоротишь', 6),
  singular3rdPerson: Word('укоротит', 6),
  plural1stPerson: Word('укоротим', 6),
  plural2ndPerson: Word('укоротите', 6),
  plural3rdPerson: Word('укоротят', 6),
  masculinePast: Word('укоротил', 6),
  femininePast: Word('укоротила', 6),
  neuterPast: Word('укоротило', 6),
  pluralPast: Word('укоротили', 6),
  imperativeInformal: Word('укороти', 6),
  imperativeFormal: Word('укоротите', 6),
  imperfect: ['укорачивать'],
};

perfectVerbs.set(укоротить.name.text, укоротить);

export { укоротить };