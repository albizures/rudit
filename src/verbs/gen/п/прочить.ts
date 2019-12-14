import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочить: PerfectVerb = {
  name: Word('прочить', 2),
  singular1stPerson: Word('прочу', 2),
  singular2ndPerson: Word('прочишь', 2),
  singular3rdPerson: Word('прочит', 2),
  plural1stPerson: Word('прочим', 2),
  plural2ndPerson: Word('прочите', 2),
  plural3rdPerson: Word('прочат', 2),
  masculinePast: Word('прочил', 2),
  femininePast: Word('прочила', 2),
  neuterPast: Word('прочило', 2),
  pluralPast: Word('прочили', 2),
  imperativeInformal: Word('прочь', 2),
  imperativeFormal: Word('прочьте', 2),
  imperfect: [],
};

perfectVerbs.set(прочить.name.text, прочить);

export { прочить };