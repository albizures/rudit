import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заразить: PerfectVerb = {
  name: Word('заразить', 5),
  singular1stPerson: Word('заражу', 5),
  singular2ndPerson: Word('заразишь', 5),
  singular3rdPerson: Word('заразит', 5),
  plural1stPerson: Word('заразим', 5),
  plural2ndPerson: Word('заразите', 5),
  plural3rdPerson: Word('заразят', 5),
  masculinePast: Word('заразил', 5),
  femininePast: Word('заразила', 5),
  neuterPast: Word('заразило', 5),
  pluralPast: Word('заразили', 5),
  imperativeInformal: Word('зарази', 5),
  imperativeFormal: Word('заразите', 5),
  imperfect: [],
};

perfectVerbs.set(заразить.name.text, заразить);

export { заразить };