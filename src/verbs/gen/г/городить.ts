import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const городить: PerfectVerb = {
  name: Word('городить', 5),
  singular1stPerson: Word('горожу', 5),
  singular2ndPerson: Word('городишь', 3),
  singular3rdPerson: Word('городит', 3),
  plural1stPerson: Word('городим', 3),
  plural2ndPerson: Word('городите', 3),
  plural3rdPerson: Word('городят', 3),
  masculinePast: Word('городил', 5),
  femininePast: Word('городила', 5),
  neuterPast: Word('городило', 5),
  pluralPast: Word('городили', 5),
  imperativeInformal: Word('городи', 5),
  imperativeFormal: Word('городите', 5),
  imperfect: [],
};

perfectVerbs.set(городить.name.text, городить);

export { городить };