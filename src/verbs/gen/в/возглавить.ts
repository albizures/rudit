import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возглавить: PerfectVerb = {
  name: Word('возглавить', 5),
  singular1stPerson: Word('возглавлю', 5),
  singular2ndPerson: Word('возглавишь', 5),
  singular3rdPerson: Word('возглавит', 5),
  plural1stPerson: Word('возглавим', 5),
  plural2ndPerson: Word('возглавите', 5),
  plural3rdPerson: Word('возглавят', 5),
  masculinePast: Word('возглавил', 5),
  femininePast: Word('возглавила', 5),
  neuterPast: Word('возглавило', 5),
  pluralPast: Word('возглавили', 5),
  imperativeInformal: Word('возглавь', 5),
  imperativeFormal: Word('возглавьте', 5),
  imperfect: ['возглавлять'],
};

perfectVerbs.set(возглавить.name.text, возглавить);

export { возглавить };