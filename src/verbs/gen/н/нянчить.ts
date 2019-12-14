import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нянчить: PerfectVerb = {
  name: Word('нянчить', 1),
  singular1stPerson: Word('нянчу', 1),
  singular2ndPerson: Word('нянчишь', 1),
  singular3rdPerson: Word('нянчит', 1),
  plural1stPerson: Word('нянчим', 1),
  plural2ndPerson: Word('нянчите', 1),
  plural3rdPerson: Word('нянчат', 1),
  masculinePast: Word('нянчил', 1),
  femininePast: Word('нянчила', 1),
  neuterPast: Word('нянчило', 1),
  pluralPast: Word('нянчили', 1),
  imperativeInformal: Word('нянчи', 1),
  imperativeFormal: Word('нянчите', 1),
  imperfect: [],
};

perfectVerbs.set(нянчить.name.text, нянчить);

export { нянчить };