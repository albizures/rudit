import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задавить: PerfectVerb = {
  name: Word('задавить', 5),
  singular1stPerson: Word('задавлю', 6),
  singular2ndPerson: Word('задавишь', 3),
  singular3rdPerson: Word('задавит', 3),
  plural1stPerson: Word('задавим', 3),
  plural2ndPerson: Word('задавите', 3),
  plural3rdPerson: Word('задавят', 3),
  masculinePast: Word('задавил', 5),
  femininePast: Word('задавила', 5),
  neuterPast: Word('задавило', 5),
  pluralPast: Word('задавили', 5),
  imperativeInformal: Word('задави', 5),
  imperativeFormal: Word('задавите', 5),
  imperfect: [],
};

perfectVerbs.set(задавить.name.text, задавить);

export { задавить };