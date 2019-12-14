import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачастить: PerfectVerb = {
  name: Word('зачастить', 6),
  singular1stPerson: Word('зачащу', 5),
  singular2ndPerson: Word('зачастишь', 6),
  singular3rdPerson: Word('зачастит', 6),
  plural1stPerson: Word('зачастим', 6),
  plural2ndPerson: Word('зачастите', 6),
  plural3rdPerson: Word('зачастят', 6),
  masculinePast: Word('зачастил', 6),
  femininePast: Word('зачастила', 6),
  neuterPast: Word('зачастило', 6),
  pluralPast: Word('зачастили', 6),
  imperativeInformal: Word('зачасти', 6),
  imperativeFormal: Word('зачастите', 6),
  imperfect: [],
};

perfectVerbs.set(зачастить.name.text, зачастить);

export { зачастить };