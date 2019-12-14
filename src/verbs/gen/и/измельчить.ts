import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измельчить: PerfectVerb = {
  name: Word('измельчить', 7),
  singular1stPerson: Word('измельчу', 7),
  singular2ndPerson: Word('измельчишь', 7),
  singular3rdPerson: Word('измельчит', 7),
  plural1stPerson: Word('измельчим', 7),
  plural2ndPerson: Word('измельчите', 7),
  plural3rdPerson: Word('измельчат', 7),
  masculinePast: Word('измельчил', 7),
  femininePast: Word('измельчила', 7),
  neuterPast: Word('измельчило', 7),
  pluralPast: Word('измельчили', 7),
  imperativeInformal: Word('измельчи', 7),
  imperativeFormal: Word('измельчите', 7),
  imperfect: [],
};

perfectVerbs.set(измельчить.name.text, измельчить);

export { измельчить };