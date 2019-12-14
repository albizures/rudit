import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потеснить: PerfectVerb = {
  name: Word('потеснить', 6),
  singular1stPerson: Word('потесню', 6),
  singular2ndPerson: Word('потеснишь', 6),
  singular3rdPerson: Word('потеснит', 6),
  plural1stPerson: Word('потесним', 6),
  plural2ndPerson: Word('потесните', 6),
  plural3rdPerson: Word('потеснят', 6),
  masculinePast: Word('потеснил', 6),
  femininePast: Word('потеснила', 6),
  neuterPast: Word('потеснило', 6),
  pluralPast: Word('потеснили', 6),
  imperativeInformal: Word('потесни', 6),
  imperativeFormal: Word('потесните', 6),
  imperfect: [],
};

perfectVerbs.set(потеснить.name.text, потеснить);

export { потеснить };