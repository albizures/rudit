import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const серебрить: PerfectVerb = {
  name: Word('серебрить', 6),
  singular1stPerson: Word('серебрю', 6),
  singular2ndPerson: Word('серебришь', 6),
  singular3rdPerson: Word('серебрит', 6),
  plural1stPerson: Word('серебрим', 6),
  plural2ndPerson: Word('серебрите', 6),
  plural3rdPerson: Word('серебрят', 6),
  masculinePast: Word('серебрил', 6),
  femininePast: Word('серебрила', 6),
  neuterPast: Word('серебрило', 6),
  pluralPast: Word('серебрили', 6),
  imperativeInformal: Word('серебри', 6),
  imperativeFormal: Word('серебрите', 6),
  imperfect: [],
};

perfectVerbs.set(серебрить.name.text, серебрить);

export { серебрить };