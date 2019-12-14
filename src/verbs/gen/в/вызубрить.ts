import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызубрить: PerfectVerb = {
  name: Word('вызубрить', 1),
  singular1stPerson: Word('вызубрю', 1),
  singular2ndPerson: Word('вызубришь', 1),
  singular3rdPerson: Word('вызубрит', 1),
  plural1stPerson: Word('вызубрим', 1),
  plural2ndPerson: Word('вызубрите', 1),
  plural3rdPerson: Word('вызубрят', 1),
  masculinePast: Word('вызубрил', 1),
  femininePast: Word('вызубрила', 1),
  neuterPast: Word('вызубрило', 1),
  pluralPast: Word('вызубрили', 1),
  imperativeInformal: Word('вызубри', 1),
  imperativeFormal: Word('вызубрите', 1),
  imperfect: [],
};

perfectVerbs.set(вызубрить.name.text, вызубрить);

export { вызубрить };