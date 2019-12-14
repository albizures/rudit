import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срастить: PerfectVerb = {
  name: Word('срастить', 5),
  singular1stPerson: Word('сращу', 4),
  singular2ndPerson: Word('срастишь', 5),
  singular3rdPerson: Word('срастит', 5),
  plural1stPerson: Word('срастим', 5),
  plural2ndPerson: Word('срастите', 5),
  plural3rdPerson: Word('срастят', 5),
  masculinePast: Word('срастил', 5),
  femininePast: Word('срастила', 5),
  neuterPast: Word('срастило', 5),
  pluralPast: Word('срастили', 5),
  imperativeInformal: Word('срасти', 5),
  imperativeFormal: Word('срастите', 5),
  imperfect: [],
};

perfectVerbs.set(срастить.name.text, срастить);

export { срастить };