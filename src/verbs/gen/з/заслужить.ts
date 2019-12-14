import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заслужить: PerfectVerb = {
  name: Word('заслужить', 6),
  singular1stPerson: Word('заслужу', 6),
  singular2ndPerson: Word('заслужишь', 4),
  singular3rdPerson: Word('заслужит', 4),
  plural1stPerson: Word('заслужим', 4),
  plural2ndPerson: Word('заслужите', 4),
  plural3rdPerson: Word('заслужат', 4),
  masculinePast: Word('заслужил', 6),
  femininePast: Word('заслужила', 6),
  neuterPast: Word('заслужило', 6),
  pluralPast: Word('заслужили', 6),
  imperativeInformal: Word('заслужи', 6),
  imperativeFormal: Word('заслужите', 6),
  imperfect: ['заслуживать'],
};

perfectVerbs.set(заслужить.name.text, заслужить);

export { заслужить };