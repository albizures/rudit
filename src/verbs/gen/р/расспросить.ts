import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расспросить: PerfectVerb = {
  name: Word('расспросить', 8),
  singular1stPerson: Word('расспрошу', 8),
  singular2ndPerson: Word('расспросишь', 6),
  singular3rdPerson: Word('расспросит', 6),
  plural1stPerson: Word('расспросим', 6),
  plural2ndPerson: Word('расспросите', 6),
  plural3rdPerson: Word('расспросят', 6),
  masculinePast: Word('расспросил', 8),
  femininePast: Word('расспросила', 8),
  neuterPast: Word('расспросило', 8),
  pluralPast: Word('расспросили', 8),
  imperativeInformal: Word('расспроси', 8),
  imperativeFormal: Word('расспросите', 8),
  imperfect: [],
};

perfectVerbs.set(расспросить.name.text, расспросить);

export { расспросить };