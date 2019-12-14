import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потащить: PerfectVerb = {
  name: Word('потащить', 5),
  singular1stPerson: Word('потащу', 5),
  singular2ndPerson: Word('потащишь', 3),
  singular3rdPerson: Word('потащит', 3),
  plural1stPerson: Word('потащим', 3),
  plural2ndPerson: Word('потащите', 3),
  plural3rdPerson: Word('потащат', 3),
  masculinePast: Word('потащил', 5),
  femininePast: Word('потащила', 5),
  neuterPast: Word('потащило', 5),
  pluralPast: Word('потащили', 5),
  imperativeInformal: Word('потащи', 5),
  imperativeFormal: Word('потащите', 5),
  imperfect: [],
};

perfectVerbs.set(потащить.name.text, потащить);

export { потащить };