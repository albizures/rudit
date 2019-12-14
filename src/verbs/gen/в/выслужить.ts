import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслужить: PerfectVerb = {
  name: Word('выслужить', 1),
  singular1stPerson: Word('выслужу', 1),
  singular2ndPerson: Word('выслужишь', 1),
  singular3rdPerson: Word('выслужит', 1),
  plural1stPerson: Word('выслужим', 1),
  plural2ndPerson: Word('выслужите', 1),
  plural3rdPerson: Word('выслужат', 1),
  masculinePast: Word('выслужил', 1),
  femininePast: Word('выслужила', 1),
  neuterPast: Word('выслужило', 1),
  pluralPast: Word('выслужили', 1),
  imperativeInformal: Word('выслужи', 1),
  imperativeFormal: Word('выслужите', 1),
  imperfect: [],
};

perfectVerbs.set(выслужить.name.text, выслужить);

export { выслужить };