import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мягчить: PerfectVerb = {
  name: Word('мягчить', 4),
  singular1stPerson: Word('мягчу', 4),
  singular2ndPerson: Word('мягчишь', 4),
  singular3rdPerson: Word('мягчит', 4),
  plural1stPerson: Word('мягчим', 4),
  plural2ndPerson: Word('мягчите', 4),
  plural3rdPerson: Word('мягчат', 4),
  masculinePast: Word('мягчил', 4),
  femininePast: Word('мягчила', 4),
  neuterPast: Word('мягчило', 4),
  pluralPast: Word('мягчили', 4),
  imperativeInformal: Word('мягчи', 4),
  imperativeFormal: Word('мягчите', 4),
  imperfect: [],
};

perfectVerbs.set(мягчить.name.text, мягчить);

export { мягчить };