import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возразить: PerfectVerb = {
  name: Word('возразить', 6),
  singular1stPerson: Word('возражу', 6),
  singular2ndPerson: Word('возразишь', 6),
  singular3rdPerson: Word('возразит', 6),
  plural1stPerson: Word('возразим', 6),
  plural2ndPerson: Word('возразите', 6),
  plural3rdPerson: Word('возразят', 6),
  masculinePast: Word('возразил', 6),
  femininePast: Word('возразила', 6),
  neuterPast: Word('возразило', 6),
  pluralPast: Word('возразили', 6),
  imperativeInformal: Word('возрази', 6),
  imperativeFormal: Word('возразите', 6),
  imperfect: ['возражать'],
};

perfectVerbs.set(возразить.name.text, возразить);

export { возразить };