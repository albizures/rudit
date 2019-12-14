import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеить: PerfectVerb = {
  name: Word('клеить', 2),
  singular1stPerson: Word('клею', 2),
  singular2ndPerson: Word('клеишь', 2),
  singular3rdPerson: Word('клеит', 2),
  plural1stPerson: Word('клеим', 2),
  plural2ndPerson: Word('клеите', 2),
  plural3rdPerson: Word('клеят', 2),
  masculinePast: Word('клеил', 2),
  femininePast: Word('клеила', 2),
  neuterPast: Word('клеило', 2),
  pluralPast: Word('клеили', 2),
  imperativeInformal: Word('клей', 2),
  imperativeFormal: Word('клейте', 2),
  imperfect: ['склеить'],
};

perfectVerbs.set(клеить.name.text, клеить);

export { клеить };