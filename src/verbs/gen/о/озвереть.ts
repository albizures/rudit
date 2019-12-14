import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озвереть: PerfectVerb = {
  name: Word('озвереть', 5),
  singular1stPerson: Word('озверею', 5),
  singular2ndPerson: Word('озвереешь', 5),
  singular3rdPerson: Word('озвереет', 5),
  plural1stPerson: Word('озвереем', 5),
  plural2ndPerson: Word('озвереете', 5),
  plural3rdPerson: Word('озвереют', 5),
  masculinePast: Word('озверел', 5),
  femininePast: Word('озверела', 5),
  neuterPast: Word('озверело', 5),
  pluralPast: Word('озверели', 5),
  imperativeInformal: Word('озверей', 5),
  imperativeFormal: Word('озверейте', 5),
  imperfect: [],
};

perfectVerbs.set(озвереть.name.text, озвереть);

export { озвереть };