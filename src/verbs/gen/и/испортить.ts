import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испортить: PerfectVerb = {
  name: Word('испортить', 3),
  singular1stPerson: Word('испорчу', 3),
  singular2ndPerson: Word('испортишь', 3),
  singular3rdPerson: Word('испортит', 3),
  plural1stPerson: Word('испортим', 3),
  plural2ndPerson: Word('испортите', 3),
  plural3rdPerson: Word('испортят', 3),
  masculinePast: Word('испортил', 3),
  femininePast: Word('испортила', 3),
  neuterPast: Word('испортило', 3),
  pluralPast: Word('испортили', 3),
  imperativeInformal: Word('испорти//испо'рть', 3),
  imperativeFormal: Word('испортите//испо'ртьте', 3),
  imperfect: [],
};

perfectVerbs.set(испортить.name.text, испортить);

export { испортить };