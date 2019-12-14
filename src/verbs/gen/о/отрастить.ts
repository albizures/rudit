import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрастить: PerfectVerb = {
  name: Word('отрастить', 6),
  singular1stPerson: Word('отращу', 5),
  singular2ndPerson: Word('отрастишь', 6),
  singular3rdPerson: Word('отрастит', 6),
  plural1stPerson: Word('отрастим', 6),
  plural2ndPerson: Word('отрастите', 6),
  plural3rdPerson: Word('отрастят', 6),
  masculinePast: Word('отрастил', 6),
  femininePast: Word('отрастила', 6),
  neuterPast: Word('отрастило', 6),
  pluralPast: Word('отрастили', 6),
  imperativeInformal: Word('отрасти', 6),
  imperativeFormal: Word('отрастите', 6),
  imperfect: [],
};

perfectVerbs.set(отрастить.name.text, отрастить);

export { отрастить };