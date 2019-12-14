import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мнить: PerfectVerb = {
  name: Word('мнить', 2),
  singular1stPerson: Word('мню', 2),
  singular2ndPerson: Word('мнишь', 2),
  singular3rdPerson: Word('мнит', 2),
  plural1stPerson: Word('мним', 2),
  plural2ndPerson: Word('мните', 2),
  plural3rdPerson: Word('мнят', 2),
  masculinePast: Word('мнил', 2),
  femininePast: Word('мнила', 2),
  neuterPast: Word('мнило', 2),
  pluralPast: Word('мнили', 2),
  imperativeInformal: Word('мни', 2),
  imperativeFormal: Word('мните', 2),
  imperfect: [],
};

perfectVerbs.set(мнить.name.text, мнить);

export { мнить };