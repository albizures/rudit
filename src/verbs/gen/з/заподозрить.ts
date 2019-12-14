import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заподозрить: PerfectVerb = {
  name: Word('заподозрить', 5),
  singular1stPerson: Word('заподозрю', 5),
  singular2ndPerson: Word('заподозришь', 5),
  singular3rdPerson: Word('заподозрит', 5),
  plural1stPerson: Word('заподозрим', 5),
  plural2ndPerson: Word('заподозрите', 5),
  plural3rdPerson: Word('заподозрят', 5),
  masculinePast: Word('заподозрил', 5),
  femininePast: Word('заподозрила', 5),
  neuterPast: Word('заподозрило', 5),
  pluralPast: Word('заподозрили', 5),
  imperativeInformal: Word('заподозри', 5),
  imperativeFormal: Word('заподозрите', 5),
  imperfect: [],
};

perfectVerbs.set(заподозрить.name.text, заподозрить);

export { заподозрить };