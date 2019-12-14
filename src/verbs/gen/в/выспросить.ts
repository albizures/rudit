import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выспросить: PerfectVerb = {
  name: Word('выспросить', 1),
  singular1stPerson: Word('выспрошу', 1),
  singular2ndPerson: Word('выспросишь', 1),
  singular3rdPerson: Word('выспросит', 1),
  plural1stPerson: Word('выспросим', 1),
  plural2ndPerson: Word('выспросите', 1),
  plural3rdPerson: Word('выспросят', 1),
  masculinePast: Word('выспросил', 1),
  femininePast: Word('выспросила', 1),
  neuterPast: Word('выспросило', 1),
  pluralPast: Word('выспросили', 1),
  imperativeInformal: Word('выспроси', 1),
  imperativeFormal: Word('выспросите', 1),
  imperfect: [],
};

perfectVerbs.set(выспросить.name.text, выспросить);

export { выспросить };