import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испросить: PerfectVerb = {
  name: Word('испросить', 6),
  singular1stPerson: Word('испрошу', 6),
  singular2ndPerson: Word('испросишь', 4),
  singular3rdPerson: Word('испросит', 4),
  plural1stPerson: Word('испросим', 4),
  plural2ndPerson: Word('испросите', 4),
  plural3rdPerson: Word('испросят', 4),
  masculinePast: Word('испросил', 6),
  femininePast: Word('испросила', 6),
  neuterPast: Word('испросило', 6),
  pluralPast: Word('испросили', 6),
  imperativeInformal: Word('испроси', 6),
  imperativeFormal: Word('испросите', 6),
  imperfect: [],
};

perfectVerbs.set(испросить.name.text, испросить);

export { испросить };