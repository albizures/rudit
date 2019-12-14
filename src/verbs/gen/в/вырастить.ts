import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырастить: PerfectVerb = {
  name: Word('вырастить', 1),
  singular1stPerson: Word('выращу', 1),
  singular2ndPerson: Word('вырастишь', 1),
  singular3rdPerson: Word('вырастит', 1),
  plural1stPerson: Word('вырастим', 1),
  plural2ndPerson: Word('вырастите', 1),
  plural3rdPerson: Word('вырастят', 1),
  masculinePast: Word('вырастил', 1),
  femininePast: Word('вырастила', 1),
  neuterPast: Word('вырастило', 1),
  pluralPast: Word('вырастили', 1),
  imperativeInformal: Word('вырасти', 1),
  imperativeFormal: Word('вырастите', 1),
  imperfect: [],
};

perfectVerbs.set(вырастить.name.text, вырастить);

export { вырастить };