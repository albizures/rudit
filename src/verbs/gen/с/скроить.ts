import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скроить: PerfectVerb = {
  name: Word('скроить', 4),
  singular1stPerson: Word('скрою', 4),
  singular2ndPerson: Word('скроишь', 4),
  singular3rdPerson: Word('скроит', 4),
  plural1stPerson: Word('скроим', 4),
  plural2ndPerson: Word('скроите', 4),
  plural3rdPerson: Word('скроят', 4),
  masculinePast: Word('скроил', 4),
  femininePast: Word('скроила', 4),
  neuterPast: Word('скроило', 4),
  pluralPast: Word('скроили', 4),
  imperativeInformal: Word('скрои', 4),
  imperativeFormal: Word('скроите', 4),
  imperfect: [],
};

perfectVerbs.set(скроить.name.text, скроить);

export { скроить };