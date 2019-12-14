import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переделить: PerfectVerb = {
  name: Word('переделить', 7),
  singular1stPerson: Word('переделю', 7),
  singular2ndPerson: Word('переделишь', 5),
  singular3rdPerson: Word('переделит', 5),
  plural1stPerson: Word('переделим', 5),
  plural2ndPerson: Word('переделите', 5),
  plural3rdPerson: Word('переделят', 5),
  masculinePast: Word('переделил', 7),
  femininePast: Word('переделила', 7),
  neuterPast: Word('переделило', 7),
  pluralPast: Word('переделили', 7),
  imperativeInformal: Word('передели', 7),
  imperativeFormal: Word('переделите', 7),
  imperfect: [],
};

perfectVerbs.set(переделить.name.text, переделить);

export { переделить };