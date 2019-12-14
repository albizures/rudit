import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const строчить: PerfectVerb = {
  name: Word('строчить', 5),
  singular1stPerson: Word('строчу', 5),
  singular2ndPerson: Word('строчишь', 5),
  singular3rdPerson: Word('строчит', 5),
  plural1stPerson: Word('строчим', 5),
  plural2ndPerson: Word('строчите', 5),
  plural3rdPerson: Word('строчат', 5),
  masculinePast: Word('строчил', 5),
  femininePast: Word('строчила', 5),
  neuterPast: Word('строчило', 5),
  pluralPast: Word('строчили', 5),
  imperativeInformal: Word('строчи', 5),
  imperativeFormal: Word('строчите', 5),
  imperfect: [],
};

perfectVerbs.set(строчить.name.text, строчить);

export { строчить };