import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заронить: PerfectVerb = {
  name: Word('заронить', 5),
  singular1stPerson: Word('зароню', 5),
  singular2ndPerson: Word('заронишь', 3),
  singular3rdPerson: Word('заронит', 3),
  plural1stPerson: Word('зароним', 3),
  plural2ndPerson: Word('зароните', 3),
  plural3rdPerson: Word('заронят', 3),
  masculinePast: Word('заронил', 5),
  femininePast: Word('заронила', 5),
  neuterPast: Word('заронило', 5),
  pluralPast: Word('заронили', 5),
  imperativeInformal: Word('зарони', 5),
  imperativeFormal: Word('зароните', 5),
  imperfect: [],
};

perfectVerbs.set(заронить.name.text, заронить);

export { заронить };