import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склеить: PerfectVerb = {
  name: Word('склеить', 3),
  singular1stPerson: Word('склею', 3),
  singular2ndPerson: Word('склеишь', 3),
  singular3rdPerson: Word('склеит', 3),
  plural1stPerson: Word('склеим', 3),
  plural2ndPerson: Word('склеите', 3),
  plural3rdPerson: Word('склеят', 3),
  masculinePast: Word('склеил', 3),
  femininePast: Word('склеила', 3),
  neuterPast: Word('склеило', 3),
  pluralPast: Word('склеили', 3),
  imperativeInformal: Word('склей', 3),
  imperativeFormal: Word('склейте', 3),
  imperfect: [],
};

perfectVerbs.set(склеить.name.text, склеить);

export { склеить };