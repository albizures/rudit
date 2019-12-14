import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переубедить: PerfectVerb = {
  name: Word('переубедить', 8),
  singular1stPerson: Word('переубежу', 8),
  singular2ndPerson: Word('переубедишь', 8),
  singular3rdPerson: Word('переубедит', 8),
  plural1stPerson: Word('переубедим', 8),
  plural2ndPerson: Word('переубедите', 8),
  plural3rdPerson: Word('переубедят', 8),
  masculinePast: Word('переубедил', 8),
  femininePast: Word('переубедила', 8),
  neuterPast: Word('переубедило', 8),
  pluralPast: Word('переубедили', 8),
  imperativeInformal: Word('переубеди', 8),
  imperativeFormal: Word('переубедите', 8),
  imperfect: [],
};

perfectVerbs.set(переубедить.name.text, переубедить);

export { переубедить };