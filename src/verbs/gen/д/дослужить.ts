import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дослужить: PerfectVerb = {
  name: Word('дослужить', 6),
  singular1stPerson: Word('дослужу', 6),
  singular2ndPerson: Word('дослужишь', 4),
  singular3rdPerson: Word('дослужит', 4),
  plural1stPerson: Word('дослужим', 4),
  plural2ndPerson: Word('дослужите', 4),
  plural3rdPerson: Word('дослужат', 4),
  masculinePast: Word('дослужил', 6),
  femininePast: Word('дослужила', 6),
  neuterPast: Word('дослужило', 6),
  pluralPast: Word('дослужили', 6),
  imperativeInformal: Word('дослужи', 6),
  imperativeFormal: Word('дослужите', 6),
  imperfect: [],
};

perfectVerbs.set(дослужить.name.text, дослужить);

export { дослужить };