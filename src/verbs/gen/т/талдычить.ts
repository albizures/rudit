import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const талдычить: PerfectVerb = {
  name: Word('талдычить', 4),
  singular1stPerson: Word('талдычу', 4),
  singular2ndPerson: Word('талдычишь', 4),
  singular3rdPerson: Word('талдычит', 4),
  plural1stPerson: Word('талдычим', 4),
  plural2ndPerson: Word('талдычите', 4),
  plural3rdPerson: Word('талдычат', 4),
  masculinePast: Word('талдычил', 4),
  femininePast: Word('талдычила', 4),
  neuterPast: Word('талдычило', 4),
  pluralPast: Word('талдычили', 4),
  imperativeInformal: Word('талдычь', 4),
  imperativeFormal: Word('талдычьте', 4),
  imperfect: [],
};

perfectVerbs.set(талдычить.name.text, талдычить);

export { талдычить };