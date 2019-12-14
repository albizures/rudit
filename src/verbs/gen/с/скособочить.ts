import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скособочить: PerfectVerb = {
  name: Word('скособочить', 6),
  singular1stPerson: Word('скособочу', 6),
  singular2ndPerson: Word('скособочишь', 6),
  singular3rdPerson: Word('скособочит', 6),
  plural1stPerson: Word('скособочим', 6),
  plural2ndPerson: Word('скособочите', 6),
  plural3rdPerson: Word('скособочат', 6),
  masculinePast: Word('скособочил', 6),
  femininePast: Word('скособочила', 6),
  neuterPast: Word('скособочило', 6),
  pluralPast: Word('скособочили', 6),
  imperativeInformal: Word('скособочь', 6),
  imperativeFormal: Word('скособочьте', 6),
  imperfect: [],
};

perfectVerbs.set(скособочить.name.text, скособочить);

export { скособочить };