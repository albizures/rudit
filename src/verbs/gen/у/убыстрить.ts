import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убыстрить: PerfectVerb = {
  name: Word('убыстрить', 6),
  singular1stPerson: Word('убыстрю', 6),
  singular2ndPerson: Word('убыстришь', 6),
  singular3rdPerson: Word('убыстрит', 6),
  plural1stPerson: Word('убыстрим', 6),
  plural2ndPerson: Word('убыстрите', 6),
  plural3rdPerson: Word('убыстрят', 6),
  masculinePast: Word('убыстрил', 6),
  femininePast: Word('убыстрила', 6),
  neuterPast: Word('убыстрило', 6),
  pluralPast: Word('убыстрили', 6),
  imperativeInformal: Word('убыстри', 6),
  imperativeFormal: Word('убыстрите', 6),
  imperfect: [],
};

perfectVerbs.set(убыстрить.name.text, убыстрить);

export { убыстрить };