import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ловчить: PerfectVerb = {
  name: Word('ловчить', 4),
  singular1stPerson: Word('ловчу', 4),
  singular2ndPerson: Word('ловчишь', 4),
  singular3rdPerson: Word('ловчит', 4),
  plural1stPerson: Word('ловчим', 4),
  plural2ndPerson: Word('ловчите', 4),
  plural3rdPerson: Word('ловчат', 4),
  masculinePast: Word('ловчил', 4),
  femininePast: Word('ловчила', 4),
  neuterPast: Word('ловчило', 4),
  pluralPast: Word('ловчили', 4),
  imperativeInformal: Word('ловчи', 4),
  imperativeFormal: Word('ловчите', 4),
  imperfect: [],
};

perfectVerbs.set(ловчить.name.text, ловчить);

export { ловчить };