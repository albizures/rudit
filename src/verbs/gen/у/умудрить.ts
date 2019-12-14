import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умудрить: PerfectVerb = {
  name: Word('умудрить', 5),
  singular1stPerson: Word('умудрю', 5),
  singular2ndPerson: Word('умудришь', 5),
  singular3rdPerson: Word('умудрит', 5),
  plural1stPerson: Word('умудрим', 5),
  plural2ndPerson: Word('умудрите', 5),
  plural3rdPerson: Word('умудрят', 5),
  masculinePast: Word('умудрил', 5),
  femininePast: Word('умудрила', 5),
  neuterPast: Word('умудрило', 5),
  pluralPast: Word('умудрили', 5),
  imperativeInformal: Word('умудри', 5),
  imperativeFormal: Word('умудрите', 5),
  imperfect: [],
};

perfectVerbs.set(умудрить.name.text, умудрить);

export { умудрить };