import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выклянчить: PerfectVerb = {
  name: Word('выклянчить', 1),
  singular1stPerson: Word('выклянчу', 1),
  singular2ndPerson: Word('выклянчишь', 1),
  singular3rdPerson: Word('выклянчит', 1),
  plural1stPerson: Word('выклянчим', 1),
  plural2ndPerson: Word('выклянчите', 1),
  plural3rdPerson: Word('выклянчат', 1),
  masculinePast: Word('выклянчил', 1),
  femininePast: Word('выклянчила', 1),
  neuterPast: Word('выклянчило', 1),
  pluralPast: Word('выклянчили', 1),
  imperativeInformal: Word('выклянчи', 1),
  imperativeFormal: Word('выклянчите', 1),
  imperfect: [],
};

perfectVerbs.set(выклянчить.name.text, выклянчить);

export { выклянчить };