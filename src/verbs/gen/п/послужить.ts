import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послужить: PerfectVerb = {
  name: Word('послужить', 6),
  singular1stPerson: Word('послужу', 6),
  singular2ndPerson: Word('послужишь', 4),
  singular3rdPerson: Word('послужит', 4),
  plural1stPerson: Word('послужим', 4),
  plural2ndPerson: Word('послужите', 4),
  plural3rdPerson: Word('послужат', 4),
  masculinePast: Word('послужил', 6),
  femininePast: Word('послужила', 6),
  neuterPast: Word('послужило', 6),
  pluralPast: Word('послужили', 6),
  imperativeInformal: Word('послужи', 6),
  imperativeFormal: Word('послужите', 6),
  imperfect: [],
};

perfectVerbs.set(послужить.name.text, послужить);

export { послужить };