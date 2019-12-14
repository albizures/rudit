import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сослужить: PerfectVerb = {
  name: Word('сослужить', 6),
  singular1stPerson: Word('сослужу', 6),
  singular2ndPerson: Word('сослужишь', 4),
  singular3rdPerson: Word('сослужит', 4),
  plural1stPerson: Word('сослужим', 4),
  plural2ndPerson: Word('сослужите', 4),
  plural3rdPerson: Word('сослужат', 4),
  masculinePast: Word('сослужил', 6),
  femininePast: Word('сослужила', 6),
  neuterPast: Word('сослужило', 6),
  pluralPast: Word('сослужили', 6),
  imperativeInformal: Word('сослужи', 6),
  imperativeFormal: Word('сослужите', 6),
  imperfect: [],
};

perfectVerbs.set(сослужить.name.text, сослужить);

export { сослужить };