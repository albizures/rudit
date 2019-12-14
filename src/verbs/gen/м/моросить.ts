import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const моросить: PerfectVerb = {
  name: Word('моросить', 5),
  singular1stPerson: Word('морошу', 5),
  singular2ndPerson: Word('моросишь', 5),
  singular3rdPerson: Word('моросит', 5),
  plural1stPerson: Word('моросим', 5),
  plural2ndPerson: Word('моросите', 7),
  plural3rdPerson: Word('моросят', 1),
  masculinePast: Word('моросил', 5),
  femininePast: Word('моросила', 5),
  neuterPast: Word('моросило', 5),
  pluralPast: Word('моросили', 5),
  imperativeInformal: Word('мороси', 5),
  imperativeFormal: Word('моросите', 5),
  imperfect: ['заморосить','поморосить'],
};

perfectVerbs.set(моросить.name.text, моросить);

export { моросить };