import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отслужить: PerfectVerb = {
  name: Word('отслужить', 6),
  singular1stPerson: Word('отслужу', 6),
  singular2ndPerson: Word('отслужишь', 4),
  singular3rdPerson: Word('отслужит', 4),
  plural1stPerson: Word('отслужим', 4),
  plural2ndPerson: Word('отслужите', 4),
  plural3rdPerson: Word('отслужат', 4),
  masculinePast: Word('отслужил', 6),
  femininePast: Word('отслужила', 6),
  neuterPast: Word('отслужило', 6),
  pluralPast: Word('отслужили', 6),
  imperativeInformal: Word('отслужи', 6),
  imperativeFormal: Word('отслужите', 6),
  imperfect: [],
};

perfectVerbs.set(отслужить.name.text, отслужить);

export { отслужить };