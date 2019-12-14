import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обслужить: PerfectVerb = {
  name: Word('обслужить', 6),
  singular1stPerson: Word('обслужу', 6),
  singular2ndPerson: Word('обслужишь', 4),
  singular3rdPerson: Word('обслужит', 4),
  plural1stPerson: Word('обслужим', 4),
  plural2ndPerson: Word('обслужите', 4),
  plural3rdPerson: Word('обслужат', 4),
  masculinePast: Word('обслужил', 6),
  femininePast: Word('обслужила', 6),
  neuterPast: Word('обслужило', 6),
  pluralPast: Word('обслужили', 6),
  imperativeInformal: Word('обслужи', 6),
  imperativeFormal: Word('обслужите', 6),
  imperfect: [],
};

perfectVerbs.set(обслужить.name.text, обслужить);

export { обслужить };