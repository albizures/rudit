import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клянчить: PerfectVerb = {
  name: Word('клянчить', 2),
  singular1stPerson: Word('клянчу', 2),
  singular2ndPerson: Word('клянчишь', 2),
  singular3rdPerson: Word('клянчит', 2),
  plural1stPerson: Word('клянчим', 2),
  plural2ndPerson: Word('клянчите', 2),
  plural3rdPerson: Word('клянчат', 2),
  masculinePast: Word('клянчил', 2),
  femininePast: Word('клянчила', 2),
  neuterPast: Word('клянчило', 2),
  pluralPast: Word('клянчили', 2),
  imperativeInformal: Word('клянчи', 2),
  imperativeFormal: Word('клянчите', 2),
  imperfect: [],
};

perfectVerbs.set(клянчить.name.text, клянчить);

export { клянчить };