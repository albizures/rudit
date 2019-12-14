import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водить: PerfectVerb = {
  name: Word('водить', 3),
  singular1stPerson: Word('вожу', 3),
  singular2ndPerson: Word('водишь', 1),
  singular3rdPerson: Word('водит', 1),
  plural1stPerson: Word('водим', 1),
  plural2ndPerson: Word('водите', 1),
  plural3rdPerson: Word('водят', 1),
  masculinePast: Word('водил', 3),
  femininePast: Word('водила', 3),
  neuterPast: Word('водило', 3),
  pluralPast: Word('водили', 3),
  imperativeInformal: Word('води', 3),
  imperativeFormal: Word('водите', 3),
  imperfect: [],
};

perfectVerbs.set(водить.name.text, водить);

export { водить };