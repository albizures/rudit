import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схитрить: PerfectVerb = {
  name: Word('схитрить', 5),
  singular1stPerson: Word('схитрю', 5),
  singular2ndPerson: Word('схитришь', 5),
  singular3rdPerson: Word('схитрит', 5),
  plural1stPerson: Word('схитрим', 5),
  plural2ndPerson: Word('схитрите', 5),
  plural3rdPerson: Word('схитрят', 5),
  masculinePast: Word('схитрил', 5),
  femininePast: Word('схитрила', 5),
  neuterPast: Word('схитрило', 5),
  pluralPast: Word('схитрили', 5),
  imperativeInformal: Word('схитри', 5),
  imperativeFormal: Word('схитрите', 5),
  imperfect: [],
};

perfectVerbs.set(схитрить.name.text, схитрить);

export { схитрить };