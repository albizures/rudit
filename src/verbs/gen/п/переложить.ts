import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переложить: PerfectVerb = {
  name: Word('переложить', 7),
  singular1stPerson: Word('переложу', 7),
  singular2ndPerson: Word('переложишь', 5),
  singular3rdPerson: Word('переложит', 5),
  plural1stPerson: Word('переложим', 5),
  plural2ndPerson: Word('переложите', 5),
  plural3rdPerson: Word('переложат', 5),
  masculinePast: Word('переложил', 7),
  femininePast: Word('переложила', 7),
  neuterPast: Word('переложило', 7),
  pluralPast: Word('переложили', 7),
  imperativeInformal: Word('переложи', 7),
  imperativeFormal: Word('переложите', 7),
  imperfect: [],
};

perfectVerbs.set(переложить.name.text, переложить);

export { переложить };