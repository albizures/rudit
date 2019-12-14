import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отразить: PerfectVerb = {
  name: Word('отразить', 5),
  singular1stPerson: Word('отражу', 5),
  singular2ndPerson: Word('отразишь', 5),
  singular3rdPerson: Word('отразит', 5),
  plural1stPerson: Word('отразим', 5),
  plural2ndPerson: Word('отразите', 5),
  plural3rdPerson: Word('отразят', 5),
  masculinePast: Word('отразил', 5),
  femininePast: Word('отразила', 5),
  neuterPast: Word('отразило', 5),
  pluralPast: Word('отразили', 5),
  imperativeInformal: Word('отрази', 5),
  imperativeFormal: Word('отразите', 5),
  imperfect: ['отражать'],
};

perfectVerbs.set(отразить.name.text, отразить);

export { отразить };