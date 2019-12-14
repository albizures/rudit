import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const огорчить: PerfectVerb = {
  name: Word('огорчить', 5),
  singular1stPerson: Word('огорчу', 5),
  singular2ndPerson: Word('огорчишь', 5),
  singular3rdPerson: Word('огорчит', 5),
  plural1stPerson: Word('огорчим', 5),
  plural2ndPerson: Word('огорчите', 5),
  plural3rdPerson: Word('огорчат', 5),
  masculinePast: Word('огорчил', 5),
  femininePast: Word('огорчила', 5),
  neuterPast: Word('огорчило', 5),
  pluralPast: Word('огорчили', 5),
  imperativeInformal: Word('огорчи', 5),
  imperativeFormal: Word('огорчите', 5),
  imperfect: [],
};

perfectVerbs.set(огорчить.name.text, огорчить);

export { огорчить };