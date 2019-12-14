import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттащить: PerfectVerb = {
  name: Word('оттащить', 5),
  singular1stPerson: Word('оттащу', 5),
  singular2ndPerson: Word('оттащишь', 3),
  singular3rdPerson: Word('оттащит', 3),
  plural1stPerson: Word('оттащим', 3),
  plural2ndPerson: Word('оттащите', 3),
  plural3rdPerson: Word('оттащат', 3),
  masculinePast: Word('оттащил', 5),
  femininePast: Word('оттащила', 5),
  neuterPast: Word('оттащило', 5),
  pluralPast: Word('оттащили', 5),
  imperativeInformal: Word('оттащи', 5),
  imperativeFormal: Word('оттащите', 5),
  imperfect: [],
};

perfectVerbs.set(оттащить.name.text, оттащить);

export { оттащить };