import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпросить: PerfectVerb = {
  name: Word('выпросить', 1),
  singular1stPerson: Word('выпрошу', 1),
  singular2ndPerson: Word('выпросишь', 1),
  singular3rdPerson: Word('выпросит', 1),
  plural1stPerson: Word('выпросим', 1),
  plural2ndPerson: Word('выпросите', 1),
  plural3rdPerson: Word('выпросят', 1),
  masculinePast: Word('выпросил', 1),
  femininePast: Word('выпросила', 1),
  neuterPast: Word('выпросило', 1),
  pluralPast: Word('выпросили', 1),
  imperativeInformal: Word('выпроси', 1),
  imperativeFormal: Word('выпросите', 1),
  imperfect: [],
};

perfectVerbs.set(выпросить.name.text, выпросить);

export { выпросить };