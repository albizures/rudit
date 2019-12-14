import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чистить: PerfectVerb = {
  name: Word('чистить', 1),
  singular1stPerson: Word('чищу', 1),
  singular2ndPerson: Word('чистишь', 1),
  singular3rdPerson: Word('чистит', 1),
  plural1stPerson: Word('чистим', 1),
  plural2ndPerson: Word('чистите', 1),
  plural3rdPerson: Word('чистят', 1),
  masculinePast: Word('чистил', 1),
  femininePast: Word('чистила', 1),
  neuterPast: Word('чистило', 1),
  pluralPast: Word('чистили', 1),
  imperativeInformal: Word('чисти', 1),
  imperativeFormal: Word('чистите', 1),
  imperfect: ['почистить'],
};

perfectVerbs.set(чистить.name.text, чистить);

export { чистить };