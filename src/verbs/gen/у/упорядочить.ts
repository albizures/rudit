import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упорядочить: PerfectVerb = {
  name: Word('упорядочить', 4),
  singular1stPerson: Word('упорядочу', 4),
  singular2ndPerson: Word('упорядочишь', 4),
  singular3rdPerson: Word('упорядочит', 4),
  plural1stPerson: Word('упорядочим', 4),
  plural2ndPerson: Word('упорядочите', 4),
  plural3rdPerson: Word('упорядочат', 4),
  masculinePast: Word('упорядочил', 4),
  femininePast: Word('упорядочила', 4),
  neuterPast: Word('упорядочило', 4),
  pluralPast: Word('упорядочили', 4),
  imperativeInformal: Word('упорядочь', 4),
  imperativeFormal: Word('упорядочьте', 4),
  imperfect: [],
};

perfectVerbs.set(упорядочить.name.text, упорядочить);

export { упорядочить };