import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удавить: PerfectVerb = {
  name: Word('удавить', 4),
  singular1stPerson: Word('удавлю', 5),
  singular2ndPerson: Word('удавишь', 2),
  singular3rdPerson: Word('удавит', 2),
  plural1stPerson: Word('удавим', 2),
  plural2ndPerson: Word('удавите', 2),
  plural3rdPerson: Word('удавят', 2),
  masculinePast: Word('удавил', 4),
  femininePast: Word('удавила', 4),
  neuterPast: Word('удавило', 4),
  pluralPast: Word('удавили', 4),
  imperativeInformal: Word('удави', 4),
  imperativeFormal: Word('удавите', 4),
  imperfect: [],
};

perfectVerbs.set(удавить.name.text, удавить);

export { удавить };