import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарастить: PerfectVerb = {
  name: Word('зарастить', 6),
  singular1stPerson: Word('заращу', 5),
  singular2ndPerson: Word('зарастишь', 6),
  singular3rdPerson: Word('зарастит', 6),
  plural1stPerson: Word('зарастим', 6),
  plural2ndPerson: Word('зарастите', 6),
  plural3rdPerson: Word('зарастят', 6),
  masculinePast: Word('зарастил', 6),
  femininePast: Word('зарастила', 6),
  neuterPast: Word('зарастило', 6),
  pluralPast: Word('зарастили', 6),
  imperativeInformal: Word('зарасти', 6),
  imperativeFormal: Word('зарастите', 6),
  imperfect: [],
};

perfectVerbs.set(зарастить.name.text, зарастить);

export { зарастить };