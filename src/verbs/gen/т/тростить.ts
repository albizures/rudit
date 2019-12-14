import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тростить: PerfectVerb = {
  name: Word('тростить', 5),
  singular1stPerson: Word('трощу', 4),
  singular2ndPerson: Word('тростишь', 5),
  singular3rdPerson: Word('тростит', 5),
  plural1stPerson: Word('тростим', 5),
  plural2ndPerson: Word('тростите', 5),
  plural3rdPerson: Word('тростят', 5),
  masculinePast: Word('тростил', 5),
  femininePast: Word('тростила', 5),
  neuterPast: Word('тростило', 5),
  pluralPast: Word('тростили', 5),
  imperativeInformal: Word('трости', 5),
  imperativeFormal: Word('тростите', 5),
  imperfect: [],
};

perfectVerbs.set(тростить.name.text, тростить);

export { тростить };