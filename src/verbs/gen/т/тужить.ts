import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тужить: PerfectVerb = {
  name: Word('тужить', 3),
  singular1stPerson: Word('тужу', 3),
  singular2ndPerson: Word('тужишь', 1),
  singular3rdPerson: Word('тужит', 1),
  plural1stPerson: Word('тужим', 1),
  plural2ndPerson: Word('тужите', 1),
  plural3rdPerson: Word('тужат', 1),
  masculinePast: Word('тужил', 3),
  femininePast: Word('тужила', 3),
  neuterPast: Word('тужило', 3),
  pluralPast: Word('тужили', 3),
  imperativeInformal: Word('тужи', 3),
  imperativeFormal: Word('тужите', 3),
  imperfect: [],
};

perfectVerbs.set(тужить.name.text, тужить);

export { тужить };