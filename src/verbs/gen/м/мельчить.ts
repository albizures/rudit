import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мельчить: PerfectVerb = {
  name: Word('мельчить', 5),
  singular1stPerson: Word('мельчу', 5),
  singular2ndPerson: Word('мельчишь', 5),
  singular3rdPerson: Word('мельчит', 5),
  plural1stPerson: Word('мельчим', 5),
  plural2ndPerson: Word('мельчите', 5),
  plural3rdPerson: Word('мельчат', 5),
  masculinePast: Word('мельчил', 5),
  femininePast: Word('мельчила', 5),
  neuterPast: Word('мельчило', 5),
  pluralPast: Word('мельчили', 5),
  imperativeInformal: Word('мельчи', 5),
  imperativeFormal: Word('мельчите', 5),
  imperfect: [],
};

perfectVerbs.set(мельчить.name.text, мельчить);

export { мельчить };